const services = [
  { number: "01", title: "Brand strategy", text: "The sharp point of view your brand has been looking for." },
  { number: "02", title: "Visual identity", text: "Distinctive systems that make your story impossible to ignore." },
  { number: "03", title: "Digital experiences", text: "Useful, beautiful places for your audience to spend time." },
  { number: "04", title: "Creative direction", text: "Big ideas, carefully steered from first sketch to final detail." },
];

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="shell">
        <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> Our capabilities</p><h2>We turn <span>good ideas</span><br />into <strong>great brands.</strong></h2></div>
        <div className="services-grid">
          {services.map((service) => <article className="service-card reveal-card" key={service.number}><span className="card-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow" aria-hidden="true">↗</span><span className="card-hover-label">Explore service <span aria-hidden="true">↗</span></span></article>)}
        </div>
        <div className="process-strip"><p className="process-label">How we work</p><div className="process-steps"><div><span>01</span><strong>Find the signal</strong><p>We listen, question, and get clear on what matters.</p></div><div><span>02</span><strong>Make the case</strong><p>We turn the sharpest idea into a system people remember.</p></div><div><span>03</span><strong>Put it to work</strong><p>We launch, learn, and leave your team with momentum.</p></div></div></div>
      </div>
    </section>
  );
}
