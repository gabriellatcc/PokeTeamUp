"use client";

import { ReactNode } from "react";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/pixelact-ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TermsSheet({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Privacy Policy</SheetTitle>
          <SheetDescription>How we handle your data</SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 min-h-0 px-4">
          <div className="space-y-6 pb-4 text-foreground/80">
            {/* INTRODUCTION */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Introduction</h3>
              <p>
                Your privacy is important to us. It is the policy of PokeTeam UP to respect
                your privacy regarding any information we may collect from you across our
                website{" "}
                <Link href="/home" className="text-secondary underline hover:text-secondary/80">
                  PokeTeam UP
                </Link>
                , and other sites we own and operate.
              </p>
              <p>
                We only request personal information when we truly need it to provide a
                service to you. We do this fairly and lawfully, with your knowledge and
                consent. We also inform you about why we are collecting it and how it will
                be used.
              </p>
              <p>
                We only retain the information collected for as long as necessary to provide
                the requested service. When we store data, we protect it within commercially
                acceptable means to prevent losses and theft, as well as unauthorized access,
                disclosure, copying, use or modification.
              </p>
              <p>
                We do not share personal identification information publicly or with third
                parties, except when required by law.
              </p>
              <p>
                Our site may have links to external sites that are not operated by us. Please
                be aware that we have no control over the content and practices of these
                sites and cannot accept responsibility for their respective{" "}
                <a
                  href="https://politicaprivacidade.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-secondary underline hover:text-secondary/80"
                >
                  privacy policies
                </a>
                .
              </p>
              <p>
                You are free to refuse our request for personal information, understanding
                that you may not be able to use some of the desired services.
              </p>
              <p>
                Continued use of our site will be considered as acceptance of our practices
                around privacy and personal information. If you have any questions about how
                we handle user data and personal information, please contact us.
              </p>
            </section>

            {/* USER COMMITMENT */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">User Commitment</h3>
              <p>
                The user commits to using the content and information that PokeTeam UP offers
                on the site appropriately and expressively, but not limitatively:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Do not get involved in illegal activities or those contrary to good faith
                  and public order;
                </li>
                <li>
                  Do not disseminate propaganda or content of a racist, xenophobic, gambling
                  or lottery nature, any type of illegal pornography, praise of terrorism or
                  against human rights;
                </li>
                <li>
                  Do not cause damage to the physical (hardwares) and logical (softwares)
                  systems of PokeTeam UP, its suppliers or third parties, to introduce or
                  disseminate computer viruses or any other hardware or software systems that
                  are capable of causing the aforementioned damages.
                </li>
              </ul>
            </section>

            {/* MORE INFORMATION */}
            <section className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">More Information</h3>
              <p>
                We hope this is clear. If there is anything you are unsure about, please
                contact us before using the features of our site.
              </p>
              <p>
                This policy is effective as of <strong>8 December 2026 07:11</strong>.
              </p>
            </section>
          </div>
        </ScrollArea>

        <SheetFooter>
          <p className="text-sm text-foreground/80">
            By using our site, you acknowledge that you have read and understood our Privacy
            Policy and User Commitment. If you do not agree with our policies, please refrain
            from using our services.
          </p>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}