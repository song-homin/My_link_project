import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "/My_link_project" : "";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-4 py-16">
      <div className="w-full max-w-sm flex flex-col items-center text-center">
        {/* 프로필 이미지 */}
        <div className="w-24 h-24 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm mb-5">
          <Image
            src={`${basePath}/profile.jpg`}
            alt="스튜어트 던켈 생쥐 유화"
            width={96}
            height={96}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        {/* 이름 */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
          송호민
        </h1>

        {/* 소개글 */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 max-w-xs">
          문제를 코드로 해결하고 더 나은 사용자 경험을 고민하는 주니어 개발자입니다.
        </p>

        {/* 심플 링크 목록 */}
        <div className="w-full flex flex-col gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/song-homin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all text-sm font-medium text-zinc-800 dark:text-zinc-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0 fill-current" width="20" height="20" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </div>
            <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform text-xs">→</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all text-sm font-medium text-zinc-800 dark:text-zinc-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0 fill-none stroke-current stroke-2" width="20" height="20" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </div>
            <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform text-xs">→</span>
          </a>

          {/* 이메일 */}
          <a
            href="mailto:aa1003gon@gmail.com"
            className="w-full py-3.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all text-sm font-medium text-zinc-800 dark:text-zinc-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0 fill-none stroke-current stroke-2" width="20" height="20" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>이메일 보내기</span>
            </div>
            <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform text-xs">→</span>
          </a>
        </div>

        {/* 푸터 */}
        <p className="mt-12 text-xs text-zinc-400 dark:text-zinc-600">
          © 2026 송호민 · MyLink
        </p>
      </div>
    </main>
  );
}
