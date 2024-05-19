import AdvancedSettings from "@/components/dashboard/settings/AdvancedSettings";
import GeneralSettings from "@/components/dashboard/settings/GeneralSettings";
import IntegrationsSettings from "@/components/dashboard/settings/IntegrationsSettings";
import OrganizationSettings from "@/components/dashboard/settings/OrganizationSettings";
import SecuritySettings from "@/components/dashboard/settings/SecuritySettings";
import SupportSettings from "@/components/dashboard/settings/SupportSettings";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function page() {
  const tabs = [
    { label: "General", value: "general", component: <GeneralSettings /> },
    { label: "Security", value: "security", component: <SecuritySettings /> },
    {
      label: "Integrations",
      value: "integrations",
      component: <IntegrationsSettings />,
    },
    { label: "Support", value: "support", component: <SupportSettings /> },
    {
      label: "Organization",
      value: "organization",
      component: <OrganizationSettings />,
    },
    { label: "Advanced", value: "advanced", component: <AdvancedSettings /> },
  ];

  const firstTab = tabs[0].value;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 items-start">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <Tabs defaultValue={firstTab}>
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent value={tab.value} key={tab.value}>
                {tab.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}
