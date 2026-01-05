import fs from 'node:fs/promises';
import path from 'node:path';

export interface Application {
  id: string;
  jobSlug: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  cvPath: string;
  submittedAt: string;
}

const STORAGE_DIR = 'storage/applications';

async function ensureStorage() {
  try {
    await fs.access(STORAGE_DIR);
  } catch {
    await fs.mkdir(STORAGE_DIR, { recursive: true });
  }
}

export async function saveApplication(application: Application) {
  await ensureStorage();
  const filePath = path.join(STORAGE_DIR, `${application.id}.json`);
  await fs.writeFile(filePath, JSON.stringify(application, null, 2));
}

export async function getAllApplications(): Promise<Application[]> {
  await ensureStorage();
  const files = await fs.readdir(STORAGE_DIR);
  const jsonFiles = files.filter(file => file.endsWith('.json'));
  
  const applications = await Promise.all(
    jsonFiles.map(async file => {
      const content = await fs.readFile(path.join(STORAGE_DIR, file), 'utf-8');
      return JSON.parse(content) as Application;
    })
  );

  // Sort by newest first
  return applications.sort((a, b) => 
    new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
}

export async function getApplication(id: string): Promise<Application | null> {
    await ensureStorage();
    try {
        const content = await fs.readFile(path.join(STORAGE_DIR, `${id}.json`), 'utf-8');
        return JSON.parse(content) as Application;
    } catch {
        return null;
    }
}
