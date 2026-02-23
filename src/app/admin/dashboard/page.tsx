import { getProjects, getMessages } from '@/lib/actions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectsTab } from '@/components/admin/ProjectsTab';
import { MessagesTab } from '@/components/admin/MessagesTab';

export default async function DashboardPage() {
  const projects = await getProjects();
  const messages = await getMessages();

  return (
    <Tabs defaultValue="projects" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <ProjectsTab initialProjects={projects} />
      </TabsContent>
      <TabsContent value="messages">
        <MessagesTab initialMessages={messages} />
      </TabsContent>
    </Tabs>
  );
}
