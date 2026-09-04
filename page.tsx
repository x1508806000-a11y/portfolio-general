'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

const marqueePages = [4, 6, 7, 14, 15, 19, 21, 22];

const projects = [
  { id: 'echo', number: '01', title: '回声协议', english: 'ECHO PROTOCOL', type: 'AIGC 概念短片 · 04:21', summary: '在意识可以迁移的永生时代，一段被删除的记忆，重新划开身份与人性的边界。', services: ['世界观', '角色 / 场景资产', '分镜设计', '动态制作'], hero: 3, gallery: [4, 5, 6, 7, 8, 9], accent: '#a9e8ef', videoUrl: 'https://p3r2u5hq19.feishu.cn/wiki/Rk64wangBipgw7kLyGLczQI4nKd?from=from_copylink' },
  { id: 'qibing', number: '02', title: '祈兵', english: 'PRAYER FORGED', type: '原创国风科幻概念短片 · 00:25', summary: '以“祈念化兵”为核心设定，将汉代战争美学、青铜机关与晶体能源融合成东方晶械朋克世界。', services: ['视觉设定', '角色设计', '武器资产', '镜头拆解'], hero: 12, gallery: [13, 14, 15, 16, 17], accent: '#8fc5ff', videoUrl: 'https://p3r2u5hq19.feishu.cn/wiki/IXvIwKXawiif23kzsPzccpFqnIf?from=from_copylink' },
  { id: 'bowers', number: '03', title: '本真', english: 'BOWERS & WILKINS PX8 S2', type: 'PRODUCT FILM / VISUAL AD', summary: '从触感、材质与精密结构切入，让产品由暗部浮现，在克制的镜头里建立高端质感与佩戴体验。', services: ['概念创意', '产品视觉资产', 'Shot Design', '剪辑交付'], hero: 18, gallery: [19, 20, 21, 22, 23], accent: '#d9ff7a', videoUrl: 'https://p3r2u5hq19.feishu.cn/wiki/WmmrwyAEoi5nJkkVRruckEMgnLc?from=from_copylink' },
];

const pageImage = (page: number) => `/works/page-${String(page).padStart(2, '0')}.jpg`;

type LightboxImage = { src: string; alt: string } | null;
type Film = { title: string; url: string } | null;

function ZoomableImage({ src, alt, className, loading, onOpen }: { src: string; alt: string; className?: string; loading?: 'lazy' | 'eager'; onOpen: (image: NonNullable<LightboxImage>) => void }) {
  return (
    <button className={`zoom-trigger ${className ?? ''}`} type="button" onClick={() => onOpen({ src, alt })} aria-label={`放大查看：${alt}`}>
      <img src={src} alt={alt} loading={loading} />
      <span className="zoom-indicator"><i aria-hidden="true">＋</i> 点击放大</span>
    </button>
  );
}

export default function Home() {
  const [lightbox, setLightbox] = useState<LightboxImage>(null);
  const [film, setFilm] = useState<Film>(null);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="回到首页">XJH<span>®</span></a>
        <nav aria-label="主导航"><a href="#about">关于</a><a href="#projects">项目</a><a href="#process">流程</a><a href="#contact">联系</a></nav>
        <span className="availability"><i /> SHANGHAI · 2026</span>
      </header>

      <section className="hero" id="top">
        <div className="grain" />
        <p className="hero-kicker">AIGC VISUAL DESIGNER · SHORT FILM DEVELOPMENT</p>
        <div className="hero-title-wrap"><h1>修建华</h1><p>XIŪ<br />JIÀN<br />HUÁ</p></div>
        <div className="hero-stage" aria-hidden="true">
          <div className="orb orb-a" /><div className="orb orb-b" />
          <img className="hero-card card-back" src={pageImage(12)} alt="" />
          <img className="hero-card card-front" src={pageImage(3)} alt="" />
          <span className="float-label label-a">VISUAL<br />DEVELOPMENT</span>
          <span className="float-label label-b">03 PROJECTS<br />24 PDF PAGES</span>
        </div>
        <div className="hero-foot">
          <p>AI 短片视觉体系开发<br />角色 · 场景 · 分镜 · 视觉资产</p>
          <a href="#projects">SCROLL TO EXPLORE <span>↓</span></a>
          <p className="right">FROM CONCEPT<br />TO FINAL FRAME</p>
        </div>
      </section>

      <section className="marquee" aria-label="作品预览"><div className="marquee-track">
        {[...marqueePages, ...marqueePages].map((page, index) => <ZoomableImage key={`${page}-${index}`} src={pageImage(page)} alt={`作品集第 ${page} 页`} onOpen={setLightbox} />)}
      </div></section>

      <section className="about" id="about">
        <div className="section-index">01 / ABOUT</div>
        <div className="about-copy">
          <p className="eyebrow">VISUAL THINKING × AI PRODUCTION</p>
          <h2>把创意变成一套<br /><em>可生产的视觉系统。</em></h2>
          <p className="lead">我是修建华，现居上海。长期从事人物视觉与商业影像，现专注 AIGC 短片、概念视觉与视觉资产开发。</p>
          <p>从命题提炼、世界观、角色与场景，到分镜、动态生成和后期交付，我习惯先建立清晰的视觉规则，再让每一帧服务于叙事。</p>
        </div>
        <div className="about-meta">
          <div><span>FOCUS</span><b>AIGC SHORT FILM<br />VISUAL DEVELOPMENT</b></div>
          <div><span>TOOLS</span><b>LIBTV / MIDJOURNEY<br />CHATGPT / KLING / ADOBE</b></div>
          <div><span>EXPERIENCE</span><b>VISUAL LEAD<br />2014—NOW</b></div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-heading"><div className="section-index">02 / SELECTED WORK</div><h2>PROJECTS<span>®</span></h2></div>
        {projects.map((project) => (
          <article className="project" id={project.id} key={project.id} style={{'--accent': project.accent} as React.CSSProperties}>
            <div className="project-head">
              <span>{project.number}</span>
              <div><p>{project.type}</p><h3>{project.title}</h3><b>{project.english}</b></div>
              <p className="project-summary">{project.summary}</p>
            </div>
            <div className="project-hero">
              <ZoomableImage src={pageImage(project.hero)} alt={`${project.title} 项目主视觉`} onOpen={setLightbox} />
              <button className="watch-film" type="button" onClick={() => setFilm({ title: project.title, url: project.videoUrl })}><i aria-hidden="true">▶</i> WATCH FILM / 播放影片</button>
              <div className="project-role">{project.services.map((service) => <span key={service}>{service}</span>)}</div>
            </div>
            <div className="project-gallery">
              {project.gallery.map((page, index) => <figure key={page}><ZoomableImage src={pageImage(page)} alt={`${project.title} 项目画面 ${index + 1}`} loading="lazy" onOpen={setLightbox} /><figcaption>{String(index + 1).padStart(2, '0')} / {project.english}</figcaption></figure>)}
            </div>
          </article>
        ))}
      </section>

      <section className="process" id="process">
        <div className="section-index">03 / PROCESS</div><h2>ONE PERSON.<br />FULL PIPELINE.</h2>
        <div className="process-grid">{['创意 / Brief','视觉设定','资产设计','分镜','一致性控制','动态生成','后期输出','复盘沉淀'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><b>{item}</b><i /></div>)}</div>
      </section>

      <footer id="contact">
        <p>AVAILABLE FOR AIGC FILM & VISUAL PROJECTS</p><h2>让我们创造<br /><em>下一段影像。</em></h2>
        <div className="contact-row"><a href="mailto:1508806000@qq.com">1508806000@QQ.COM ↗</a><span>WECHAT · X17141766664</span><span>SHANGHAI, CHINA</span></div>
        <div className="footer-mark">XIU JIAN HUA <span>©2026</span></div>
      </footer>

      <Dialog open={Boolean(lightbox)} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent showCloseButton={false} overlayClassName="lightbox-overlay" className="lightbox-content" onClick={(event) => event.target === event.currentTarget && setLightbox(null)}>
          <DialogTitle className="sr-only">放大查看作品图片</DialogTitle>
          <DialogDescription className="sr-only">可滚动查看完整图片，按 ESC 或点击遮罩关闭。</DialogDescription>
          <button className="modal-close" type="button" onClick={() => setLightbox(null)} aria-label="关闭大图">×</button>
          {lightbox && <img src={lightbox.src} alt={lightbox.alt} />}
          <p className="modal-hint">滚轮查看完整图片 · ESC 关闭</p>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(film)} onOpenChange={(open) => !open && setFilm(null)}>
        <DialogContent showCloseButton={false} overlayClassName="lightbox-overlay" className="film-content">
          <DialogTitle>{film?.title} · FINAL FILM</DialogTitle>
          <DialogDescription>优先在站内打开原始影片页面；若飞书限制嵌入，请使用下方按钮在新标签页播放。</DialogDescription>
          <button className="modal-close" type="button" onClick={() => setFilm(null)} aria-label="关闭影片">×</button>
          {film && <iframe src={film.url} title={`${film.title} 影片`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />}
          {film && <a className="film-external" href={film.url} target="_blank" rel="noreferrer"><i aria-hidden="true">↗</i> 无法播放？新标签页打开原视频</a>}
        </DialogContent>
      </Dialog>
    </main>
  );
}
