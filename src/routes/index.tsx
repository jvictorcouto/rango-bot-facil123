import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MessageCircle, Clock, AlertTriangle, Users, Bot, ShoppingBag,
  Zap, TrendingUp, ShieldCheck, DollarSign, Star, Check, Flame, Quote,
} from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Quero%20automatizar%20meu%20WhatsApp%20com%20a%20RangoTech";

function WhatsAppButton({ children, className = "", size = "md" }: { children: React.ReactNode; className?: string; size?: "md" | "lg" }) {
  const sizes = size === "lg" ? "px-8 py-5 text-lg" : "px-6 py-3.5 text-base";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp font-semibold text-whatsapp-foreground shadow-[0_10px_30px_-10px_oklch(0.68_0.17_150/0.7)] transition-all hover:scale-[1.03] hover:shadow-[0_15px_40px_-10px_oklch(0.68_0.17_150/0.9)] active:scale-100 ${sizes} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-5 py-20 sm:py-28 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
};

function Landing() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] shadow-[var(--shadow-glow)]">
              <Flame className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">Rango<span className="text-primary">Tech</span></span>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2 text-sm font-semibold text-whatsapp-foreground transition hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-warm)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Zap className="h-3.5 w-3.5" /> Chatbot com IA para o seu delivery
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Aumente seus pedidos no WhatsApp em até{" "}
              <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">30%</span>{" "}
              sem contratar mais funcionários
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Automatize seu atendimento, responda clientes na hora e nunca mais perca uma venda — 24h por dia, 7 dias por semana.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg">Quero automatizar meu WhatsApp</WhatsAppButton>
              <span className="text-sm text-muted-foreground">⚡ Configuração em 24h • Teste grátis</span>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-[image:var(--gradient-hero)]" />)}
              </div>
              <div>
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-foreground/80">+200 restaurantes vendendo mais</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[image:var(--gradient-hero)] opacity-30 blur-3xl" />
            <img src={heroFood} alt="Hambúrguer e pizza prontos para entrega" width={1280} height={1280}
              className="relative aspect-square w-full rounded-3xl object-cover shadow-[var(--shadow-card)]" />
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-4 top-8 rounded-2xl bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp/20"><MessageCircle className="h-5 w-5 text-whatsapp" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Novo pedido</p>
                  <p className="text-sm font-bold">R$ 87,50 ✅</p>
                </div>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -right-4 bottom-8 rounded-2xl bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:-right-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Pedidos hoje</p>
                  <p className="text-sm font-bold">+32% 🚀</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DOR */}
      <Section>
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black sm:text-5xl">Cansado de <span className="text-destructive">perder pedidos</span> todo dia?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Esses problemas estão custando caro pro seu negócio:</p>
        </motion.div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, t: "Demora pra responder", d: "Clientes esperam 5 minutos e vão pro concorrente." },
            { icon: Users, t: "Cliente desistindo", d: "Sem resposta rápida, ele fecha o app e pede em outro lugar." },
            { icon: MessageCircle, t: "WhatsApp lotado", d: "Mensagens acumulando, time perdido, vendas escapando." },
            { icon: AlertTriangle, t: "Erros no pedido", d: "Atendente cansado erra valor, item ou endereço." },
          ].map((p, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-destructive/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/15">
                <p.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SOLUÇÃO */}
      <Section className="border-y border-border bg-card/40">
        <motion.div {...fadeUp} className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Bot className="h-3.5 w-3.5" /> A solução
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">Um atendente com IA que <span className="text-primary">nunca dorme</span></h2>
            <p className="mt-5 text-lg text-muted-foreground">
              O chatbot da RangoTech atende seus clientes no WhatsApp em segundos, envia o cardápio, tira dúvidas e fecha o pedido sozinho.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Responde automaticamente em segundos",
                "Envia cardápio digital com fotos",
                "Fecha o pedido e calcula a entrega",
                "Funciona 24h, inclusive de madrugada",
              ].map((t,i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent"><Check className="h-4 w-4 text-accent-foreground" /></div>
                  <span className="text-base">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8"><WhatsAppButton>Quero ver funcionando</WhatsAppButton></div>
          </div>
          <ChatDemo />
        </motion.div>
      </Section>

      {/* BENEFÍCIOS */}
      <Section>
        <motion.div {...fadeUp} className="text-center">
          <h2 className="text-3xl font-black sm:text-5xl">O que muda no seu negócio</h2>
          <p className="mt-4 text-lg text-muted-foreground">Resultados reais desde a primeira semana</p>
        </motion.div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: TrendingUp, t: "+30% de pedidos", d: "Mais conversões com atendimento instantâneo." },
            { icon: Zap, t: "Resposta em 3s", d: "Cliente fala, robô responde. Sem espera." },
            { icon: ShieldCheck, t: "Zero erro", d: "Pedidos certinhos direto pra cozinha." },
            { icon: DollarSign, t: "Economia real", d: "Reduz custo com atendentes e folha." },
          ].map((b, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/60">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
              <b.icon className="relative h-8 w-8 text-primary" />
              <h3 className="relative mt-4 text-xl font-bold">{b.t}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROVA SOCIAL */}
      <Section className="border-y border-border bg-card/40">
        <motion.div {...fadeUp} className="text-center">
          <h2 className="text-3xl font-black sm:text-5xl">Donos de restaurante que <span className="text-primary">venderam mais</span></h2>
        </motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            { n: "Carlos M.", b: "Burger House • SP", t: "Em 2 semanas meu pedido médio subiu 28%. O bot responde mais rápido que qualquer atendente." },
            { n: "Juliana R.", b: "Pizzaria Bella • RJ", t: "Sexta de noite era um caos. Hoje o robô fecha 80% dos pedidos sozinho. Mudou minha vida." },
            { n: "Roberto A.", b: "Açaí do Beto • BH", t: "Investi pouco e em 1 mês recuperei. Agora foco em fazer comida boa, o resto a RangoTech cuida." },
          ].map((d, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
              <Quote className="h-7 w-7 text-primary/60" />
              <p className="mt-4 text-base leading-relaxed">"{d.t}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] font-bold text-primary-foreground">{d.n[0]}</div>
                <div>
                  <p className="font-semibold">{d.n}</p>
                  <p className="text-xs text-muted-foreground">{d.b}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* OFERTA */}
      <Section>
        <motion.div {...fadeUp} className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card p-8 sm:p-14">
          <div className="absolute inset-0 bg-[image:var(--gradient-warm)] opacity-60" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                🔥 Oferta de lançamento
              </span>
              <h2 className="mt-5 text-3xl font-black sm:text-5xl">Teste <span className="text-primary">grátis por 7 dias</span></h2>
              <p className="mt-4 text-lg text-muted-foreground">Setup completo, sem fidelidade. Se não vender mais, você não paga.</p>
              <ul className="mt-7 space-y-3">
                {["Configuração feita pelo nosso time","Cardápio digital incluso","Treinamento da IA com seu negócio","Suporte por WhatsApp"].map((t,i)=>(
                  <li key={i} className="flex items-center gap-3"><Check className="h-5 w-5 text-accent" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background/80 p-8 backdrop-blur">
              <p className="text-sm text-muted-foreground">A partir de</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-black">R$ 197</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground line-through">De R$ 397/mês</p>
              <div className="mt-6"><WhatsAppButton size="lg" className="w-full">Começar teste grátis</WhatsAppButton></div>
              <p className="mt-4 text-center text-xs text-muted-foreground">Sem cartão de crédito • Cancele quando quiser</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* CTA FINAL */}
      <Section className="border-t border-border">
        <motion.div {...fadeUp} className="text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            Cada minuto sem responder é{" "}
            <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">um pedido perdido</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Comece agora e veja seus pedidos crescerem ainda esta semana.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <WhatsAppButton size="lg">Começar agora e não perder mais pedidos</WhatsAppButton>
            <span className="text-sm text-muted-foreground">⏱️ Resposta em menos de 5 minutos</span>
          </div>
        </motion.div>
      </Section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)]"><Flame className="h-4 w-4 text-primary-foreground" /></div>
            <span className="font-bold">RangoTech</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 RangoTech. Feito pra quem vive de delivery.</p>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_15px_40px_-10px_oklch(0.68_0.17_150/0.9)] transition hover:scale-110 sm:h-16 sm:w-16"
        aria-label="Falar no WhatsApp">
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30" />
      </a>
    </main>
  );
}

function ChatDemo() {
  const messages = [
    { from: "user", text: "Oi, vocês têm pizza de calabresa?" },
    { from: "bot", text: "Olá! 😊 Sim, temos! Pizza Calabresa Especial — R$ 49,90 (8 fatias). Quer adicionar ao pedido?" },
    { from: "user", text: "Pode mandar 1, e uma Coca 2L" },
    { from: "bot", text: "Anotado! 🍕🥤 Pizza Calabresa + Coca 2L = R$ 59,90.\nEntrega no endereço cadastrado? (R$ 6 — 35min)" },
    { from: "user", text: "Sim, pode mandar!" },
    { from: "bot", text: "Pedido confirmado! ✅ Já tá indo pra cozinha. Agradecemos a preferência! 🔥" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-hero)] opacity-20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-3 border-b border-border bg-background/60 px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-hero)]">
            <ShoppingBag className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-bold">RangoTech Bot</p>
            <p className="text-xs text-accent">● online agora</p>
          </div>
        </div>
        <div className="space-y-3 bg-background/30 p-5">
          {messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm ${
                m.from === "user" ? "rounded-br-sm bg-whatsapp text-whatsapp-foreground" : "rounded-bl-sm bg-card text-card-foreground"
              }`}>{m.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
