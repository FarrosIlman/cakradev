'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const DINO_IDLE = [
  '..........########..',
  '.........##########.',
  '.........##.#######.',
  '.........##########.',
  '.........#####......',
  '.........########...',
  '.#......######......',
  '.##....#########....',
  '.###..########.#....',
  '.#############......',
  '..############......',
  '...##########.......',
  '....########........',
  '.....######.........',
  '.....##..##.........',
  '.....##..##.........',
  '.....##..##.........',
  '.....###.###........',
];

const DINO_RUN1 = DINO_IDLE.slice(0, 14).concat([
  '.....##..###........',
  '.....##.............',
  '.....##.............',
  '.....###............',
]);

const DINO_RUN2 = DINO_IDLE.slice(0, 14).concat([
  '.....###..##........',
  '..........##........',
  '..........##........',
  '..........###.......',
]);

const CACTUS_SM = [
  '...##...',
  '..####..',
  '..####.#',
  '# ####.#',
  '#.######',
  '#.#####.',
  '######..',
  '..####..',
  '..####..',
  '..####..',
  '..####..',
  '..####..',
];

const CACTUS_LG = [
  '....##......',
  '...####.....',
  '...####...#.',
  '.#.####..##.',
  '##.####..##.',
  '##.########.',
  '#######.###.',
  '.#####..###.',
  '...####.###.',
  '...########.',
  '...######...',
  '...####.....',
  '...####.....',
  '...####.....',
];

export default function DinoRunner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scoreText, setScoreText] = useState('HI 00000   00000');
  const [modeMessage, setModeMessage] = useState(
    'mode: auto-pilot (klik untuk main sendiri)'
  );
  const [isPaused, setIsPaused] = useState(false);

  const gameState = useRef({
    running: true,
    autoPlay: true,
    gameOver: false,
    score: 0,
    hiScore: 0,
    speed: 5.2,
    tickCount: 0,
    dino: { x: 64, y: 160, vy: 0, jumping: false },
    obstacles: [] as {
      x: number;
      sp: string[];
      w: number;
      h: number;
      green: boolean;
    }[],
    clouds: [
      { x: 180, y: 48, s: 0.5 },
      { x: 460, y: 34, s: 0.35 },
      { x: 690, y: 58, s: 0.45 },
    ],
    pebbles: [] as { x: number; w: number; yOff: number }[],
    groundY: 160,
    width: 800,
    height: 210,
    scale: 2.4,
  });

  const jump = useCallback((userTriggered: boolean) => {
    const s = gameState.current;
    if (userTriggered && s.autoPlay) {
      s.autoPlay = false;
      setModeMessage('mode: manual — tekan Spasi / klik untuk melompat');
    }

    if (s.gameOver) {
      s.gameOver = false;
      s.score = 0;
      s.speed = 5.2;
      s.obstacles = [];
      s.dino.y = s.groundY;
      s.dino.vy = 0;
      s.dino.jumping = false;
      setIsPaused(false);
      setModeMessage(
        s.autoPlay
          ? 'mode: auto-pilot (klik untuk main sendiri)'
          : 'mode: manual — tekan Spasi / klik untuk melompat'
      );
      return;
    }

    if (!s.running) {
      s.running = true;
      setIsPaused(false);
    }

    if (!s.dino.jumping) {
      s.dino.vy = -10.8;
      s.dino.jumping = true;
    }
  }, []);

  const togglePause = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const s = gameState.current;
    if (s.gameOver) {
      jump(true);
      return;
    }
    s.running = !s.running;
    setIsPaused(!s.running);
  }, [jump]);

  useEffect(() => {
    const box = containerRef.current;
    const canvas = canvasRef.current;
    if (!box || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const s = gameState.current;

    // Initialize pebbles
    s.pebbles = [];
    for (let i = 0; i < 28; i++) {
      s.pebbles.push({
        x: i * 45 + Math.random() * 25,
        w: 2 + Math.floor(Math.random() * 6),
        yOff: (i % 2) * 3,
      });
    }

    const resize = () => {
      const r = box.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      s.width = r.width;
      s.height = r.height;
      s.groundY = s.height - 52;
      canvas.width = s.width * dpr;
      canvas.height = s.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!s.dino.jumping) s.dino.y = s.groundY;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawSprite = (
      sprite: string[],
      x: number,
      y: number,
      scale: number,
      color: string
    ) => {
      ctx.fillStyle = color;
      for (let r = 0; r < sprite.length; r++) {
        const row = sprite[r];
        for (let c = 0; c < row.length; c++) {
          if (row[c] === '#') {
            ctx.fillRect(
              Math.floor(x + c * scale),
              Math.floor(y + r * scale),
              Math.ceil(scale),
              Math.ceil(scale)
            );
          }
        }
      }
    };

    let animationId: number;

    const loop = () => {
      if (s.running && !s.gameOver) {
        s.tickCount++;
        s.score += 0.18;
        s.speed = Math.min(10.5, 5.2 + Math.floor(s.score / 120) * 0.45);

        // Auto-pilot logic
        if (s.autoPlay && !s.dino.jumping && s.obstacles.length) {
          const next = s.obstacles[0];
          const dist = next.x - (s.dino.x + 44);
          if (dist > 0 && dist < 68 + s.speed * 5) {
            jump(false);
          }
        }

        // Dino physics
        if (s.dino.jumping) {
          s.dino.y += s.dino.vy;
          s.dino.vy += 0.62;
          if (s.dino.y >= s.groundY) {
            s.dino.y = s.groundY;
            s.dino.vy = 0;
            s.dino.jumping = false;
          }
        }

        // Spawn obstacles
        const lastX = s.obstacles.length
          ? s.obstacles[s.obstacles.length - 1].x
          : 0;
        if (
          !s.obstacles.length ||
          (s.width - lastX > 240 + Math.random() * 240 && Math.random() < 0.045)
        ) {
          const isBig = Math.random() > 0.45;
          const spr = isBig ? CACTUS_LG : CACTUS_SM;
          s.obstacles.push({
            x: s.width + 20,
            sp: spr,
            w: spr[0].length * s.scale,
            h: spr.length * s.scale,
            green: Math.random() > 0.5,
          });
        }

        // Move & Check collision
        for (let i = s.obstacles.length - 1; i >= 0; i--) {
          const o = s.obstacles[i];
          o.x -= s.speed;
          const dW = 16 * s.scale;
          const dH = 16 * s.scale;
          const dTop = s.dino.y - 18 * s.scale;
          const oTop = s.groundY - o.h;

          if (
            s.dino.x + 8 < o.x + o.w - 4 &&
            s.dino.x + dW - 4 > o.x + 4 &&
            dTop + dH - 4 > oTop + 4
          ) {
            if (s.autoPlay) {
              s.dino.vy = -10.5;
              s.dino.jumping = true;
            } else {
              s.gameOver = true;
              if (s.score > s.hiScore) s.hiScore = Math.floor(s.score);
              setModeMessage('GAME OVER — klik atau tekan Spasi untuk ulang');
            }
          }
          if (o.x + o.w < -20) s.obstacles.splice(i, 1);
        }

        // Pebbles & Clouds
        s.pebbles.forEach((p) => {
          p.x -= s.speed;
          if (p.x < -10) p.x = s.width + Math.random() * 40;
        });

        s.clouds.forEach((c) => {
          c.x -= c.s;
          if (c.x < -60) c.x = s.width + 40;
        });

        const currentScore = Math.floor(s.score);
        if (currentScore > s.hiScore) s.hiScore = currentScore;
        setScoreText(
          `HI ${String(s.hiScore).padStart(5, '0')}   ${String(currentScore).padStart(5, '0')}`
        );
      }

      // Render
      ctx.clearRect(0, 0, s.width, s.height);

      // Clouds
      ctx.fillStyle = '#e4e4e7';
      s.clouds.forEach((c) => {
        ctx.fillRect(c.x, c.y, 34, 8);
        ctx.fillRect(c.x + 8, c.y - 6, 18, 6);
      });

      // Ground & pebbles
      ctx.fillStyle = '#d4d4d8';
      ctx.fillRect(0, s.groundY, s.width, 1.5);
      s.pebbles.forEach((p) => {
        ctx.fillRect(p.x, s.groundY + 5 + p.yOff, p.w, 1.5);
      });

      // Obstacles
      s.obstacles.forEach((o) => {
        drawSprite(
          o.sp,
          o.x,
          s.groundY - o.h,
          s.scale,
          o.green ? '#10b981' : '#111111'
        );
      });

      // Dino
      const frame = s.dino.jumping
        ? DINO_IDLE
        : Math.floor(s.tickCount / 6) % 2 === 0
        ? DINO_RUN1
        : DINO_RUN2;

      drawSprite(
        frame,
        s.dino.x,
        s.dino.y - 18 * s.scale,
        s.scale,
        s.gameOver ? '#ef4444' : '#10b981'
      );

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          e.preventDefault();
          jump(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [jump]);

  return (
    <div
      className="dots"
      id="dots"
      ref={containerRef}
      title="Klik atau tekan Spasi untuk melompat"
      onClick={() => jump(true)}
      onTouchStart={(e) => {
        // Prevent default touch scrolling inside game box
        if (e.target instanceof HTMLButtonElement) return;
        e.preventDefault();
        jump(true);
      }}
    >
      <div className="dino-hud">
        <span className="lb" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: 12 }}>
          <span className="dino-title-full">cakradev_runner.exe / [SPACE / TAP = LOMPAT]</span>
          <span className="dino-title-short">cakradev_runner.exe</span>
        </span>
        <span
          className="lb"
          id="dino-score"
          style={{ color: 'var(--fg)', fontWeight: 600, whiteSpace: 'nowrap' }}
        >
          {scoreText}
        </span>
      </div>

      <canvas className="dino-canvas" ref={canvasRef} />

      <div className="dino-bar">
        <span className="lb" id="dino-msg">
          {modeMessage}
        </span>
        <button
          className="pb"
          id="pl"
          type="button"
          onClick={togglePause}
        >
          {gameState.current.gameOver ? 'Restart' : isPaused ? 'Play' : 'Pause'}
        </button>
      </div>
    </div>
  );
}
