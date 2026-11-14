import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-12 text-zinc-900 dark:text-zinc-100">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        {/* 프로필 이미지 & 상태 뱃지 */}
        <div className="relative mb-6">
          <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-indigo-500/10 transition-transform hover:scale-105 duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900 flex items-center justify-center">
              <Image
                src="/profile.svg"
                alt="송호민 프로필 사진"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          {/* 바이브 코딩 상태 뱃지 */}
          <span className="absolute bottom-1 right-1 flex items-center gap-1 bg-emerald-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full shadow border-2 border-white dark:border-zinc-950">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Vibe
          </span>
        </div>

        {/* 이름 */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          송호민
        </h1>

        {/* 소개글 */}
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xs">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다
        </p>

        {/* 심플 링크 목록 */}
        <div className="w-full flex flex-col gap-3">
          <a
            href="https://github.com/song-homin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 font-medium text-sm text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2 group"
          >
            <span>GitHub</span>
            <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform text-xs">→</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 font-medium text-sm text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2 group"
          >
            <span>Instagram</span>
            <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform text-xs">→</span>
          </a>
          <a
            href="mailto:contact@example.com"
            className="w-full py-3.5 px-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 font-medium text-sm text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2 group"
          >
            <span>이메일 보내기</span>
            <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform text-xs">✉️</span>
          </a>
        </div>
      </div>
    </main>
  );
}
