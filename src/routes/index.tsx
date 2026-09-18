import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, BriefcaseBusiness, Clapperboard, Dices, Gamepad2, GraduationCap, Music2, Sparkles, Trophy, Users } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Aura AI — Curiosity Lives Here" },
    { name: "description", content: "Explore ideas, interests, study paths and future possibilities with Aura AI." },
    { property: "og:title", content: "Aura AI — Curiosity Lives Here" },
    { property: "og:description", content: "Explore ideas, interests, study paths and future possibilities with Aura AI." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const paths = [
  { number: "01", title: "Ask AI", copy: "Ideas, answers, next steps.", icon: Sparkles, tone: "forest", prompt: "Help me think through a big decision" },
  { number: "02", title: "Explore games", copy: "Play. Discover. Get inspired.", icon: Gamepad2, tone: "blue", prompt: "Find a game that matches my mood" },
  { number: "03", title: "Music", copy: "Hear what moves you.", icon: Music2, tone: "plain", prompt: "Build a playlist for deep focus" },
  { number: "04", title: "Movies", copy: "Find your next favorite.", icon: Clapperboard, tone: "lime", prompt: "Recommend a movie I won't forget" },
  { number: "05", title: "Books", copy: "See the world differently.", icon: BookOpen, tone: "plain", prompt: "Find a book that changes my perspective" },
  { number: "06", title: "Live sports", copy: "Follow what you love.", icon: Trophy, tone: "plain", prompt: "Catch me up on today's big games" },
  { number: "07", title: "Study", copy: "Turn confusion into clarity.", icon: GraduationCap, tone: "lime", prompt: "Make a study plan I can actually follow" },
  { number: "08", title: "Community", copy: "Find people who get it.", icon: Users, tone: "plain", prompt: "Help me find my kind of community" },
  { number: "09", title: "Career", copy: "Map a future that fits.", icon: BriefcaseBusiness, tone: "blue", prompt: "Show me careers that fit my strengths" },
  { number: "10", title: "Surprise me", copy: "Open an unexpected door.", icon: Dices, tone: "forest", prompt: "Take me somewhere unexpected" },
] as const;

function Index() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [active, setActive] = useState("01");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = query.trim();
    if (nextQuery) setSubmitted(nextQuery);
  }

  function choosePath(number: string, prompt: string) {
    setActive(number);
    setQuery(prompt);
    setSubmitted("");
  }

  return (
    <main className="aura-shell bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label="Aura AI home">
          <span className="aura-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><span className="block font-display text-2xl font-bold leading-none">Aura AI</span><span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Curiosity lives here</span></span>
        </a>
        <p className="hidden text-right text-[9px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-muted-foreground sm:block">Students · curious minds<br />brighter futures</p>
      </header>

      <section id="top" className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pb-5 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-5xl text-center">
          <h1 className="font-display text-[clamp(2.65rem,5.4vw,5.5rem)] font-extrabold uppercase leading-[0.88]">One place for<br />whatever comes next.</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg">Think through choices, discover interests, find resources,<br className="hidden sm:block" /> and turn curiosity into your next move.</p>
          <form onSubmit={handleSubmit} className="ai-tool mx-auto mt-5 flex max-w-3xl items-center gap-2 rounded-full border border-border bg-card p-2 pl-5 sm:pl-7">
            <Sparkles className="size-5 shrink-0 text-brand-blue sm:size-6" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="What do you want help finding?" placeholder="What do you want help finding today?" className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:h-12 sm:text-lg" />
            <Button type="submit" variant="hero" size="icon" className="size-10 shrink-0 sm:size-12" aria-label="Explore your question"><ArrowRight className="size-5" /></Button>
          </form>
          <p aria-live="polite" className="mt-2 min-h-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">{submitted ? `Exploring “${submitted}”` : "Choose a path below or ask anything"}</p>
        </div>

        <div className="feature-map relative mt-3 flex-1">
          <div className="path-line" aria-hidden="true" />
          <div className="grid h-full grid-cols-2 gap-2 sm:grid-cols-5 sm:grid-rows-2 lg:gap-3">
            {paths.map(({ number, title, copy, icon: Icon, tone, prompt }) => (
              <button key={number} type="button" onClick={() => choosePath(number, prompt)} aria-pressed={active === number} className={`interest-card interest-card-${tone} ${active === number ? "interest-card-active" : ""}`}>
                <span className="interest-number">{number}</span><Icon className="interest-icon" strokeWidth={1.8} />
                <span className="min-w-0 text-left"><strong className="block font-display text-sm font-bold uppercase leading-tight lg:text-base">{title}</strong><span className="mt-1 hidden text-[11px] opacity-70 lg:block">{copy}</span></span>
                <ArrowRight className="interest-arrow" />
              </button>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-[9px] font-semibold uppercase tracking-[0.34em] text-muted-foreground"><span className="h-px w-10 bg-border" />A more curious you<span className="h-px w-10 bg-border" /></div>
      </section>
    </main>
  );
}