import Image from "next/image";
import Link from "next/link";

// Image assets
const imgHeroBg = "/images/hero-bg.png";
const imgMapPin = "/images/map-pin.png";
const imgServiceIcon = "/images/service-icon.png";
const imgDocumentIcon = "/images/document-icon.png";
const imgHandshakeIcon = "/images/handshake-icon.png";
const imgSarahBg = "/images/sarah-bg.png";
const imgSarahPhoto = "/images/sarah-photo.png";
const imgMichaelBg = "/images/michael-bg.png";
const imgMichaelPhoto = "/images/michael-photo.png";
const imgEmilyBg = "/images/emily-bg.png";
const imgEmilyPhoto = "/images/emily-photo.png";
const imgVerified = "/images/verified.png";
const imgEmailIcon = "/images/email-icon.png";
const imgMapDiagram = "/images/map-diagram.png";
const imgMapColorful = "/images/map-colorful.png";
const imgSearch = "/images/search.svg";
const imgUserIcon = "/images/user-icon.svg";
const imgStar = "/images/star.svg";
const imgPrevArrow = "/images/prev-arrow.svg";
const imgNextArrow = "/images/next-arrow.svg";
const imgInstagram = "/images/instagram.svg";
const imgFacebook = "/images/facebook.svg";
const imgTwitter = "/images/twitter.svg";
const imgLogo = "/images/logo.png";

const whyCards = [
  {
    title: "Melhores localizações",
    desc: "Nossa equipe escolhe a dedo os locais de implantação de cada loteamento.",
    icon: imgMapPin,
  },
  {
    title: "Serviço personalizado",
    desc: "Temos diversas opções de pagamento e negociação, tudo pensado para você!",
    icon: imgServiceIcon,
  },
  {
    title: "Processos Transparentes",
    desc: "Todos os lotes são escriturados e regularizados previamente.",
    icon: imgDocumentIcon,
  },
  {
    title: "Suporte Pós venda",
    desc: "Estamos juntos com você nessa jornada, que não acaba com a sua aquisição!",
    icon: imgHandshakeIcon,
  },
];

const reviews = [
  {
    name: "Sarah Nguyen",
    city: "Pequeri",
    rating: "5.0",
    photo: imgSarahPhoto,
    bg: imgSarahBg,
  },
  {
    name: "Michael Rodriguez",
    city: "Bicas",
    rating: "4.5",
    photo: imgMichaelPhoto,
    bg: imgMichaelBg,
  },
  {
    name: "Emily Johnson",
    city: "Mar de Espanha",
    rating: "5.0",
    photo: imgEmilyPhoto,
    bg: imgEmilyBg,
  },
];

export default function Home() {
  return (
    <div
      className="overflow-x-hidden"
      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
    >
      {/* ── Hero + Navbar ─────────────────────────────────────── */}
      <section
        className="relative bg-[#fef7f2] overflow-hidden"
        style={{ height: 906 }}
      >
        <div className="relative h-full max-w-[1440px] mx-auto">
          {/* Background aerial photo */}
          <Image
            src={imgHeroBg}
            alt="Vista aérea do loteamento"
            width={1405}
            height={791}
            priority
            className="absolute object-cover"
            style={{ top: 115, left: 182 }}
          />

          {/* Navbar */}
          <nav
            className="absolute top-0 left-0 right-0 flex items-center"
            style={{ height: 128, paddingLeft: 104, paddingRight: 104 }}
          >
            <Image
              src={imgLogo}
              alt="Coimbra"
              width={108}
              height={62}
              className="object-cover flex-shrink-0"
            />
            <div className="flex items-center gap-10 mx-auto">
              {["PRINCIPAL", "MAPA", "LOCALIZAÇÃO", "CONTATO"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-bold text-[#2b2a2a] hover:text-[#539f54]"
                  style={{ fontSize: 18 }}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-5 flex-shrink-0">
              <Image
                src={imgSearch}
                alt="Buscar"
                width={24}
                height={24}
                className="cursor-pointer"
                unoptimized
              />
              <Image
                src={imgUserIcon}
                alt="Usuário"
                width={24}
                height={24}
                className="cursor-pointer"
                unoptimized
              />
              <button
                className="bg-[#539f54] text-white font-semibold rounded-[8px]"
                style={{ padding: "14px 34px", fontSize: 16 }}
              >
                Entrar
              </button>
            </div>
          </nav>

          {/* Hero copy */}
          <div className="absolute" style={{ left: 104, top: 309 }}>
            <h1 className="text-[#2b2a2a]" style={{ fontSize: 68, lineHeight: 1.1 }}>
              <span className="block font-medium">Realize seu</span>
              <span>
                <span className="font-extrabold">sonho </span>
                <span className="font-medium">conosco</span>
              </span>
            </h1>
            <p
              className="font-bold text-[#34783d]"
              style={{ fontSize: 18, lineHeight: 1.6, marginTop: 16, width: 413 }}
            >
              Explore a nova solução em moradia na cidade de Bicas-MG
            </p>
            <Link href="/loteamento">
              <button
                className="bg-[#0e413a] text-white font-semibold rounded-[8px]"
                style={{ marginTop: 32, width: 215, height: 71, fontSize: 18 }}
              >
                Mapa dos lotes
              </button>
            </Link>
          </div>

          {/* Watermark label */}
          <p
            className="absolute font-bold text-white"
            style={{ fontSize: 18, lineHeight: 1.6, bottom: 37, right: 196 }}
          >
            Imagem ilustrativa
          </p>
        </div>
      </section>

      {/* ── Mapa dos Lotes ────────────────────────────────────── */}
      <section className="bg-white" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div
          className="max-w-[1440px] mx-auto flex gap-12 items-start"
          style={{ paddingLeft: 73, paddingRight: 73 }}
        >
          {/* Map diagram */}
          <div
            className="relative flex-shrink-0 rounded-[44px] overflow-hidden"
            style={{ width: 787, height: 652 }}
          >
            <Image
              src={imgMapDiagram}
              alt=""
              fill
              className="object-cover rounded-[44px]"
              style={{ opacity: 0.13 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={imgMapColorful}
                alt="Mapa de lotes"
                width={719}
                height={518}
                className="object-cover"
                style={{ opacity: 0.8, transform: "rotate(180deg)" }}
              />
            </div>
            <p
              className="absolute font-normal text-black"
              style={{ fontSize: 14, top: 24, left: 24 }}
            >
              Mapa interativo dos lotes
            </p>
            {/* Zoom controls */}
            <div
              className="absolute flex flex-col gap-3"
              style={{ right: 40, bottom: 60 }}
            >
              <div
                className="bg-white rounded-[10px] flex items-center justify-center"
                style={{ width: 50, height: 50 }}
              >
                <span
                  className="font-bold text-black"
                  style={{ fontSize: 28, lineHeight: 1 }}
                >
                  +
                </span>
              </div>
              <div
                className="bg-white rounded-[10px] flex items-center justify-center"
                style={{ width: 50, height: 50 }}
              >
                <span
                  className="font-bold text-black"
                  style={{ fontSize: 28, lineHeight: 1 }}
                >
                  -
                </span>
              </div>
            </div>
          </div>

          {/* Right info */}
          <div className="flex-1 pt-4">
            <Image
              src={imgLogo}
              alt="Vale dos Passos"
              width={366}
              height={212}
              className="object-cover"
            />
            <h2
              className="font-extrabold text-[#2b2a2a]"
              style={{ fontSize: 40, lineHeight: 1.4, marginTop: 24, width: 514 }}
            >
              Clique nos lotes para saber mais informações
            </h2>
            <p
              className="font-bold text-[#34783d]"
              style={{ fontSize: 18, lineHeight: 1.6, marginTop: 16, width: 514 }}
            >
              Temos diversas opções disponíveis, não perca tempo, garanta já o seu!
            </p>
            <div style={{ marginTop: 24 }}>
              <p className="font-bold text-[#53a052]" style={{ fontSize: 48 }}>
                Todos os Lotes
              </p>
              <p className="font-bold text-[#53a052]" style={{ fontSize: 48 }}>
                Escriturados!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Porque nos escolher ───────────────────────────────── */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div
          className="max-w-[1440px] mx-auto"
          style={{ paddingLeft: 104, paddingRight: 104 }}
        >
          <h2
            className="text-center font-extrabold text-[#2b2a2a]"
            style={{ fontSize: 40, lineHeight: 1.4 }}
          >
            Porque nos escolher?
          </h2>
          <p
            className="text-center font-bold text-[#34783d]"
            style={{ fontSize: 18, lineHeight: 1.6, marginTop: 8 }}
          >
            Tenha a melhor experiência em loteamentos do mercado!
          </p>
          <div
            className="grid grid-cols-4 gap-6"
            style={{ marginTop: 48 }}
          >
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#c1ddbb] rounded-[18px] overflow-hidden"
                style={{
                  height: 268,
                  padding: "30px 24px 24px",
                  boxShadow: "0px 4px 30px 0px rgba(43,27,18,0.12)",
                }}
              >
                <div
                  className="bg-[#fbf5f1] rounded-[8px] flex items-center justify-center"
                  style={{ width: 83, height: 83 }}
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <p
                  className="font-bold text-[#2b2a2a] whitespace-nowrap"
                  style={{ fontSize: 18, marginTop: 24 }}
                >
                  {card.title}
                </p>
                <p
                  className="font-semibold text-[#34783d]"
                  style={{ fontSize: 16, lineHeight: 1.3, marginTop: 8, width: 227 }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Depoimentos ───────────────────────────────────────── */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div
          className="max-w-[1440px] mx-auto"
          style={{ paddingLeft: 104, paddingRight: 104 }}
        >
          <h2
            className="text-center font-extrabold text-[#2b2a2a] mx-auto"
            style={{ fontSize: 40, lineHeight: 1.4, width: 720 }}
          >
            Veja a opinião de quem já fez parte desse sonho!
          </h2>
          <div className="grid grid-cols-3 gap-6" style={{ marginTop: 48 }}>
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-[#c1ddbb] rounded-[18px] overflow-hidden"
                style={{ height: 430 }}
              >
                {/* Background photo */}
                <div className="relative overflow-hidden" style={{ height: 168 }}>
                  <Image
                    src={review.bg}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Card content */}
                <div style={{ padding: "16px 24px 0" }}>
                  <div className="flex items-start gap-4">
                    <Image
                      src={review.photo}
                      alt={review.name}
                      width={58}
                      height={58}
                      className="rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p
                        className="font-bold text-[#2b2a2a] whitespace-nowrap"
                        style={{ fontSize: 20 }}
                      >
                        {review.name}
                      </p>
                      <div
                        className="flex items-center justify-between"
                        style={{ marginTop: 4 }}
                      >
                        <p
                          className="font-semibold text-[#2b2a2a]"
                          style={{ fontSize: 16 }}
                        >
                          {review.city}
                        </p>
                        <div
                          className="bg-white rounded-[4px] flex items-center gap-1"
                          style={{ padding: "2px 8px", height: 24 }}
                        >
                          <Image
                            src={imgStar}
                            alt="★"
                            width={20}
                            height={20}
                            unoptimized
                          />
                          <span
                            className="font-semibold text-[#2b2a2a]"
                            style={{ fontSize: 16 }}
                          >
                            {review.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    className="font-semibold text-[#34783d]"
                    style={{
                      fontSize: 16,
                      lineHeight: 1.3,
                      marginTop: 16,
                      width: 334,
                    }}
                  >
                    Texto de exemplo sobre a opinião de um cliente real que já
                    realizou a aquisição de seu terreno no loteamente Vale dos
                    Passos.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4" style={{ marginTop: 40 }}>
            <button>
              <Image
                src={imgPrevArrow}
                alt="Anterior"
                width={58}
                height={58}
                unoptimized
              />
            </button>
            <button>
              <Image
                src={imgNextArrow}
                alt="Próximo"
                width={58}
                height={58}
                unoptimized
              />
            </button>
          </div>
        </div>
      </section>

      {/* ── Contato / FAQ ─────────────────────────────────────── */}
      <section
        className="bg-[#f3fef2]"
        style={{ paddingTop: 80, paddingBottom: 80 }}
      >
        <div
          className="max-w-[1440px] mx-auto"
          style={{ paddingLeft: 104, paddingRight: 104 }}
        >
          <h2
            className="text-center font-extrabold text-[#2b2a2a] mx-auto"
            style={{ fontSize: 40, lineHeight: 1.4, width: 666 }}
          >
            Tem alguma pergunta? Entre em contato conosco!
          </h2>
          <div
            className="flex items-center justify-center gap-20"
            style={{ marginTop: 40 }}
          >
            <div className="flex items-center gap-2">
              <Image src={imgVerified} alt="" width={26} height={26} />
              <span
                className="font-bold text-[#345432]"
                style={{ fontSize: 18 }}
              >
                Converse ao vivo com nossa equipe
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={imgVerified} alt="" width={26} height={26} />
              <span
                className="font-bold text-[#345432]"
                style={{ fontSize: 18 }}
              >
                Navegue pelas perguntas frequentes
              </span>
            </div>
          </div>
          {/* Email form */}
          <div
            className="flex justify-center gap-4"
            style={{ marginTop: 40 }}
          >
            <div
              className="bg-[#c1ddbb] rounded-[8px] flex items-center gap-3"
              style={{
                width: 505,
                height: 58,
                padding: "0 16px",
                boxShadow: "0px 4px 30px 0px rgba(43,27,18,0.12)",
              }}
            >
              <Image src={imgEmailIcon} alt="" width={24} height={24} />
              <span
                className="font-semibold text-[#345432]"
                style={{ fontSize: 18 }}
              >
                Seu endereço de email
              </span>
            </div>
            <button
              className="bg-[#2b2a2a] text-white rounded-[8px] font-semibold"
              style={{ width: 156, height: 58, fontSize: 18 }}
            >
              Enviar
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="bg-[#c6ddbb]" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div
          className="max-w-[1440px] mx-auto flex gap-24"
          style={{ paddingLeft: 104, paddingRight: 104 }}
        >
          {/* Logo + tagline */}
          <div style={{ width: 207, flexShrink: 0 }}>
            <Image
              src={imgLogo}
              alt="Coimbra"
              width={207}
              height={55}
              className="object-contain"
            />
            <p
              className="font-bold text-[#34783d]"
              style={{ fontSize: 18, lineHeight: 1.3, marginTop: 16, width: 219 }}
            >
              Trazendo o melhor do morar, para mais perto de você!
            </p>
          </div>

          {/* Sobre */}
          <div>
            <p className="font-bold text-[#2b2a2a]" style={{ fontSize: 22 }}>
              Sobre
            </p>
            <ul style={{ marginTop: 16 }}>
              {["Nossa História", "Empreendimentos", "Nossa Equipe"].map(
                (item) => (
                  <li key={item} style={{ marginTop: 8 }}>
                    <a
                      href="#"
                      className="font-bold text-[#34783d]"
                      style={{ fontSize: 18 }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <p className="font-bold text-[#2b2a2a]" style={{ fontSize: 22 }}>
              Suporte
            </p>
            <ul style={{ marginTop: 16 }}>
              {["FAQ", "Entre em Contato", "Termos de Serviço"].map((item) => (
                <li key={item} style={{ marginTop: 8 }}>
                  <a
                    href="#"
                    className="font-bold text-[#34783d]"
                    style={{ fontSize: 18 }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nossas Redes */}
          <div>
            <p className="font-bold text-[#2b2a2a]" style={{ fontSize: 22 }}>
              Nossas Redes
            </p>
            <ul style={{ marginTop: 16 }}>
              {[
                { name: "Instagram", icon: imgInstagram },
                { name: "Facebook", icon: imgFacebook },
                { name: "Twitter (x)", icon: imgTwitter },
              ].map((social) => (
                <li
                  key={social.name}
                  className="flex items-center gap-3"
                  style={{ marginTop: 8 }}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    unoptimized
                  />
                  <a
                    href="#"
                    className="font-bold text-[#34783d]"
                    style={{ fontSize: 18 }}
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
