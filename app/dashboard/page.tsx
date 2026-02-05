"use client";

import { createClient } from "@/lib/supabase";
import { useUser } from "@/lib/hooks/use-user";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { LogOut, Zap } from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const supabase = createClient();
  const { data: user, isLoading } = useUser();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    queryClient.removeQueries({ queryKey: ["user"] });
    router.push("/auth");
  };

  if (isLoading) return <DashboardSkeleton />;

  const emailInitial = user?.email?.charAt(0).toUpperCase() ?? "?";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Logo />
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8 space-y-8">
        {/* User Info Card */}
        <Card>
          <CardHeader className="flex-row items-center gap-4 space-y-0">
            <Avatar className="h-14 w-14">
              <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                {emailInitial}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <CardTitle>{user?.email}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Free Plan</Badge>
                <Badge variant="outline">Active</Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Separator />

        {/* Post Generator Placeholder */}
        <Card variant="interactive">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <CardTitle>Post Generator</CardTitle>
            </div>
            <CardDescription>
              Generate engaging social media posts with AI. Choose your platform,
              tone, and topic — we&apos;ll do the rest.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-border">
              <p className="text-sm text-muted-foreground">Coming soon...</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-9 w-24 rounded-lg" />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8 space-y-8">
        <Card>
          <CardHeader className="flex-row items-center gap-4 space-y-0">
            <Skeleton className="h-14 w-14 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-48" />
              <div className="flex gap-2">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            </div>
          </CardHeader>
        </Card>

        <Skeleton className="h-px w-full" />

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-72" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-32 w-full rounded-lg" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
