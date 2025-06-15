import { Brain, BarChart4, FlaskConical } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              "Machine Learning Enthusiast Focused on Building Intelligent and Scalable Systems"
            </h3>

            <p className="text-muted-foreground">
              I’ve been immersed in machine learning for the past few years, constantly refining my skills in data analysis, model building, and deploying intelligent systems. My experience spans Python, TensorFlow, scikit-learn, and other ML tools and frameworks.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about using data to solve real-world problems, exploring new research, and developing models that make a measurable impact. I'm always eager to push the boundaries of what's possible with AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building predictive models and intelligent systems using supervised and unsupervised learning techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart4 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Interpreting complex datasets and visualizing insights to support decision-making and model design.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Model Experimentation</h4>
                  <p className="text-muted-foreground">
                    Designing, testing, and iterating on machine learning models to maximize performance and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
