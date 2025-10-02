const Footer = () => {
  return (
    <footer className="glass-card mt-20 border-t border-border/50">
      <div className="container mx-auto px-4 py-6">
        <p className="text-sm text-center text-muted-foreground">
          Website developed by{" "}
          <a
            href="https://www.linkedin.com/in/parushuram-malagaddi/"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Parushuram M
          </a>
          {" "}ECE'26
        </p>
      </div>
    </footer>
  );
};

export default Footer;
