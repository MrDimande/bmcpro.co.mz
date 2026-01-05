import { supabase } from './supabase';

export interface Application {
  id?: string;
  jobSlug: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  cvPath: string;
  submittedAt?: string;
  status?: 'pending' | 'reviewed' | 'rejected' | 'hired';
}

export async function saveApplication(application: Application) {
  const { error } = await supabase
    .from('applications')
    .insert({
      id: application.id,
      job_slug: application.jobSlug,
      name: application.name,
      email: application.email,
      phone: application.phone,
      message: application.message,
      cv_url: application.cvPath,
      submitted_at: application.submittedAt
    });

  if (error) {
    console.error('Error saving application to Supabase:', error);
    throw new Error('Failed to save application');
  }
}

export async function getAllApplications(): Promise<Application[]> {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching applications:', error);
    return [];
  }

  return data.map((app: any) => ({
    id: app.id,
    jobSlug: app.job_slug,
    name: app.name,
    email: app.email,
    phone: app.phone,
    message: app.message,
    cvPath: app.cv_url,
    submittedAt: app.created_at,
    status: app.status
  }));
}

export async function getApplication(id: string): Promise<Application | null> {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    jobSlug: data.job_slug,
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    cvPath: data.cv_url,
    submittedAt: data.created_at,
    status: data.status
  };
}
