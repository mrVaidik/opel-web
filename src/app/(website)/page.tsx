import VoiceFlowAgent from '@/components/global/voiceflow'
import LandingPageNavBar from './_components/navbar'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import  Link  from 'next/link'
import React from 'react'
import { FeatureSection } from './_components/feature-section'
import PricingSection from './_components/pricing-section'
export default function Home() {
  return <main>
    <LandingPageNavBar/>

      <div>
        <section className="container mx-auto px-4 py-20 text-center">
                <h1 className='text-5xl font-bold mb-6'>Record, Share , Summarize & Collaborate</h1>
            <p className='text-xl mb-8'>
          Opel is one of platform that allows you to record your meetings, share them with your team, and summarize them for easy reference. With Opel, you can easily keep track of important discussions and decisions made during meetings, ensuring that everyone is on the same page.
            </p>
            <Link href="/auth/sign-in">
            <Button  size="lg" className="mr-4">
            Start for Free
            <ArrowRight className="ml-2" />
            </Button>
            </Link>
            <Link href="https://youtu.be/Wr9Uuw2f1a0">
              <Button size="lg" variant="outline">
            Watch Demo
            </Button>
            </Link>

            <section className='container mx-auto px-4 py-20'>
              <h2 className='text-3xl font-bold mb-8 text-center'>Why choose Opel?</h2>
              <div className='grid md:grid-cols-3 gap-8'>
                {[
                  'Web & Desktop Recording',
                  'AI-Powered Summarization',
                  'Team Collaboration',
                  'Secure & Private',
                  'Easy Sharing',
                  'Cross-Platform Compatibility',
                  'Customizable Workflows',
                  'User-Friendly Interface',
                  'Real-Time Transcription',
                ].map((feature,index) => (
                  <div key={index} className='flex item-center space-x-2'>
                    <CheckCircle className='text-green-500'/>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>
            <FeatureSection/>

            <PricingSection/>



        </section>
              <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; 2023 Opel. All rights reserved.</p>
      </footer>

      </div>
  </main>
}
