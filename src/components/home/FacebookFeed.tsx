import Reveal from '../motion/Reveal';

type Post = { label: string; date: string; likes: string; tall?: boolean };

const POSTS: Post[] = [
  { label: 'Post grande · destacado', date: 'Hoy', likes: '♡ 412 · ✎ 28', tall: true },
  { label: 'Reel', date: 'Mar', likes: '♡ 98' },
  { label: 'Post', date: 'Sáb', likes: '♡ 64' },
  { label: 'Post', date: 'Mié', likes: '♡ 188' },
  { label: 'Foto', date: 'Vie', likes: '♡ 220' },
];

const PLACEHOLDER_BG =
  'repeating-linear-gradient(135deg, rgba(0,0,0,0.06) 0 6px, transparent 6px 12px), linear-gradient(#fff,#fff)';

export default function FacebookFeed() {
  const [big, ...rest] = POSTS;

  return (
    <section id="facebook" className="bg-paper">
      <Reveal intensity="strong" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8 flex items-center gap-4">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-ink bg-white text-base font-semibold text-ink">
            f
          </span>
          <div>
            <p className="text-base font-semibold tracking-tight text-ink">
              Síguenos · @HCE.RD
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink/55">
              Posts de Facebook
            </p>
          </div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto rounded-full border border-ink/20 px-3.5 py-1.5 text-xs text-ink transition hover:bg-white"
          >
            Ver perfil ↗
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          <FeedCard post={big} className="md:col-span-1 md:row-span-2" tall />
          {rest.map((p, i) => (
            <FeedCard key={i} post={p} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function FeedCard({
  post,
  className = '',
  tall = false,
}: {
  post: Post;
  className?: string;
  tall?: boolean;
}) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border border-ink/15 bg-white ${className}`}
    >
      <div
        className={`flex flex-1 items-center justify-center text-[10px] uppercase tracking-[0.16em] text-ink/45 ${
          tall ? 'min-h-[280px]' : 'min-h-[140px]'
        }`}
        style={{ backgroundImage: PLACEHOLDER_BG }}
      >
        [ {post.label} ]
      </div>
      <div className="flex items-center justify-between border-t border-dashed border-ink/15 px-3 py-2 text-[11px] text-ink/70">
        <span>{post.date}</span>
        <span className="text-ink/55">{post.likes}</span>
      </div>
    </article>
  );
}
