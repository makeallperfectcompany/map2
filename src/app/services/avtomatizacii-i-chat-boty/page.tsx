import type { Metadata } from 'next';
import { automationBotsService } from '@/content/services/avtomatizacii-i-chat-boty';
import { AutomationBotsHeroSection } from '@/components/sections/AutomationBotsHeroSection/AutomationBotsHeroSection';
import { AutomationScopeSection } from '@/components/sections/AutomationScopeSection/AutomationScopeSection';
import { AutomationProcessSection } from '@/components/sections/AutomationProcessSection/AutomationProcessSection';
import { AutomationChannelsSection } from '@/components/sections/AutomationChannelsSection/AutomationChannelsSection';
import { AutomationUseCasesSection } from '@/components/sections/AutomationUseCasesSection/AutomationUseCasesSection';
import { AutomationPricingSection } from '@/components/sections/AutomationPricingSection/AutomationPricingSection';
import { AutomationServiceFaqSection } from '@/components/sections/AutomationServiceFaqSection/AutomationServiceFaqSection';
import ServiceSharedSections from '@/components/sections/ServiceSharedSections';

export const metadata: Metadata = automationBotsService.metadata;

export default function AutomationBotsServicePage() {
  return (
    <main>
      <AutomationBotsHeroSection data={automationBotsService.hero} />
      <AutomationScopeSection data={automationBotsService.scope} />
      <AutomationProcessSection data={automationBotsService.process} />
      <AutomationChannelsSection data={automationBotsService.channels} />
      <AutomationUseCasesSection data={automationBotsService.useCases} />
      <AutomationPricingSection data={automationBotsService.pricing} />
      <ServiceSharedSections finalCta={{ title: automationBotsService.finalCta.title, description: automationBotsService.finalCta.text }} />
      <AutomationServiceFaqSection data={automationBotsService.faq} />
    </main>
  );
}
