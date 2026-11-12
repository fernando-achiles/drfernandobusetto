import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Phone, Clock, Award, Stethoscope, HeartPulse, Leaf } from "lucide-react";
import doctor from "@/assets/doctor.jpeg.asset.json";
import s1 from "@/assets/space-1.jpg.asset.json";
import s2 from "@/assets/space-2.jpg.asset.json";
import s3 from "@/assets/space-3.jpg.asset.json";
import s4 from "@/assets/space-4.jpg.asset.json";
import s5 from "@/assets/space-5.jpg.asset.json";
import s6 from "@/assets/space-6.jpg.asset.json";
import s7 from "@/assets/space-7.jpg.asset.json";

const MSG =
  "Olá! Gostaria de obter mais informações sobre os serviços oferecidos pela clínica e verificar a disponibilidade de horários para agendamento de uma consulta.\nAguardo o retorno.\nObrigado(a)!";
export const WHATSAPP_URL = `https://wa.me/5549991294272?text=${encodeURIComponent(MSG)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Fernando Busetto | Nefrologia, Nutrologia e Clínica Médica" },
      { name: "description", content: "Mais de 30 anos de experiência em Nefrologia, Clínica Médica e Nutrologia em Concórdia - SC. Agende sua consulta pelo WhatsApp." },
      { property: "og:title", content: "Dr. Fernando Busetto | Concórdia - SC" },
      { property: "og:description", content: "Saúde integral do adulto com atendimento humanizado. Agende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WaButton({ label = "Agendar pelo WhatsApp" }: { label?: string }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-lg ring-1 ring-gold/60 transition hover:-translate-y-0.5 hover:bg-primary/90">
      <MessageCircle className="h-5 w-5 text-gold" /> {label}
    </a>
  );
}

const specialties = [
  { icon: Stethoscope, t: "Nefrologia", d: "Diagnóstico, prevenção e tratamento de doenças renais e hipertensão." },
  { icon: HeartPulse, t: "Clínica Médica e Medicina Intensiva", d: "Manejo de doenças crônicas complexas, check-ups e avaliação clínica detalhada." },
  { icon: Leaf, t: "Pós-Graduação em Nutrologia", d: "Abordagem voltada à vitalidade, emagrecimento, reeducação e suporte metabólico." },
];

const gallery = [
  { src: s2.url, alt: "Recepção" }, { src: s1.url, alt: "Sala de consulta" }, { src: s3.url, alt: "Corredor" },
  { src: s4.url, alt: "Sala de espera" }, { src: s5.url, alt: "Sala de exames" }, { src: s6.url, alt: "Aquário na recepção" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="leading-tight">
            <span className="block font-display text-2xl font-semibold text-primary">Dr. Fernando Busetto</span>
            <span className="block text-[11px] uppercase tracking-[0.25em] text-gold">Nefrologia · Nutrologia · Clínica Médica</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#sobre" className="hover:text-primary">Sobre mim</a>
            <a href="#especialidades" className="hover:text-primary">Especialidades</a>
            <a href="#espaco" className="hover:text-primary">Nosso espaço</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Concórdia · SC</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-primary md:text-6xl">
            Saúde integral do adulto, com experiência e acolhimento.
          </h1>
          <div className="gold-rule my-6" />
          <p className="max-w-md text-lg text-muted-foreground">
            Mais de 30 anos de medicina dedicados à Nefrologia, Clínica Médica, Medicina Intensiva e Nutrologia.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WaButton />
            <span className="flex items-center gap-1 text-sm text-muted-foreground"><span className="text-gold">★★★★★</span> 5,0 no Google</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm fade-up">
          <div className="absolute -inset-3 translate-x-4 translate-y-4 rounded-2xl border border-gold" />
          <img src={doctor.url} alt="Dr. Fernando Busetto" className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl" />
        </div>
      </section>

      <section id="sobre" className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Sobre mim</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary">Histórico e atuação</h2>
          <div className="gold-rule my-6" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            O consultório do Dr. Fernando Busetto é um espaço de alta especialidade médica focado na saúde integral do adulto,
            combinando experiência clínica de longa data com atendimento humanizado.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Trajetória e registros", d: "Formado em Medicina pela UFPEL (1994), com mais de 30 anos de profissão (CRM-SC 8059). Residência em Nefrologia pela Santa Casa de Porto Alegre (RQE 5603) e título em Medicina Intensiva pela AMIB (RQE 10976)." },
              { t: "Nutrologia", d: "Pós-graduado em Nutrologia e Metabologia pela Faculdade Unimed." },
              { t: "Experiência na região", d: "Atua em Concórdia desde 1998: Diretor Clínico e coordenador da UTI Adulto do Hospital São Francisco, coordenador do Serviço de Hemodiálise do HSF, presidente da Unimed Concórdia (2006–2012) e mais de 20 anos dedicados à nefrologia e à saúde pública no município." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border-t-2 border-gold bg-background p-6 shadow-sm">
                <Award className="h-6 w-6 text-gold" />
                <h3 className="mt-3 font-display text-xl font-semibold text-primary">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="especialidades" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Especialidades</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-primary">Foco de atendimento</h2>
        <div className="gold-rule my-6" />
        <div className="grid gap-6 md:grid-cols-3">
          {specialties.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-xl border border-border p-8 transition hover:border-gold hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary"><Icon className="h-6 w-6 text-gold" /></div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="espaco" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Nosso espaço</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary">Um ambiente pensado para você</h2>
          <div className="gold-rule my-6" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g) => (
              <figure key={g.alt} className="overflow-hidden rounded-xl ring-1 ring-gold/30">
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-square w-full object-cover transition duration-500 hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contato</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary">Agende sua consulta</h2>
          <div className="gold-rule my-6" />
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold" />R. Getúlio Vargas, 500 – 2º andar, sala 206 – Centro, Concórdia – SC, 89700-017</li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold" />(49) 3442-1016 · WhatsApp (49) 99129-4272</li>
            <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-gold" />Atendimento a partir das 07:30</li>
          </ul>
          <div className="mt-8"><WaButton label="Falar no WhatsApp" /></div>
        </div>
        <div className="overflow-hidden rounded-xl ring-1 ring-gold/30">
          <img src={s7.url} alt="Prédio do consultório" className="h-full min-h-64 w-full object-cover" />
        </div>
      </section>

      <footer className="bg-primary py-8 text-center text-sm text-primary-foreground/80">
        <p className="font-display text-lg text-gold">Dr. Fernando Busetto</p>
        <p className="mt-1">CRM-SC 8059 · RQE 5603 · RQE 10976</p>
      </footer>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-xl ring-2 ring-gold transition hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
