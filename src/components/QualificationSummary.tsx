'use client';
import { useState } from 'react';
import { generateSummary } from '@/lib/actions';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Loader, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function QualificationSummary() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await generateSummary();
      if (result.qualificationSummary) {
        setSummary(result.qualificationSummary);
        toast({
          title: 'Summary Generated!',
          description: 'Your qualification summary has been created.',
        });
      } else {
        throw new Error('Failed to generate summary.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'Could not generate the qualification summary. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (summary) {
      navigator.clipboard.writeText(summary);
      toast({
        title: 'Copied to Clipboard!',
        description: 'The summary has been copied to your clipboard.',
      });
    }
  };

  return (
    <section id="ai-summary" className="bg-bg-ai-summary">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="mx-auto max-w-3xl">
          <CardHeader className="text-center">
            <Wand2 className="mx-auto h-10 w-10 text-primary" />
            <CardTitle className="font-headline text-3xl bg-gradient-to-r from-accent-4 to-accent-1 bg-clip-text text-transparent">Generate Qualification Summary</CardTitle>
            <CardDescription className="md:text-lg">
              Use the power of AI to craft a compelling summary of your qualifications based on your profile.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex justify-center">
              <Button onClick={handleGenerateSummary} disabled={isLoading} size="lg">
                {isLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate with AI
                  </>
                )}
              </Button>
            </div>

            {summary && (
              <div className="mt-8 space-y-4 text-left">
                <Label htmlFor="summary-output" className="text-lg font-semibold">Your Generated Summary:</Label>
                <Textarea 
                  id="summary-output"
                  readOnly 
                  value={summary} 
                  className="min-h-[200px] text-base bg-background" 
                />
                <Button onClick={handleCopyToClipboard} variant="outline">
                  Copy to Clipboard
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
