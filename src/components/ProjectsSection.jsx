import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects=[


  
    {
       id:1,
       title:"Landing Page",
       description:"A description landing page app using React and Tailwind.",
       image:"/projects/projects1.png",
       tags:["React","TainwindCSS","Supabase"],
       demoUrl:"https://startup-ranjita.netlify.app/",
       githubUrl:"https://github.com/ranjuadhikari14/react-project", 
    },
    {
       id:2,
       title:"ISP DataSet",
       description:"Comparative analysis of internet speed and cost across 20 countries using Python and Google Colab, with a focus on Nepal.",
       image:"/projects/projects2.png",
       tags:["Numpy","Pandas","Seaborn","MatPlotLib"],
       demoUrl:"a",
       githubUrl:"https://github.com/ranjuadhikari14/ISP-DataSet", 
    },
    

    {
       id:3,
       title:"Travel Explorer",
       description:"Responsive travel website frontend with interactive destination browsing, search functionality, and dynamic itinerary display.",
       image:"/projects/project4.png",

       tags:["HTML","CSS","JavaScript"],
       demoUrl:"a",
       githubUrl:"a", 
    },
     {
       id:4,
       title:"Podcast Listening Time",
       description: "Data-driven analysis of podcast listening time featuring insightful visualizations, trend identification, and user behavior breakdown.",
       image:"/projects/project5.png",
       tags:[ "NumPy", "Pandas", "Seaborn"," Matplotlib"],
       demoUrl:"a",
       githubUrl:"https://github.com/ranjuadhikari14/podcast-listening-time", 
    },
     {
       id:5,
       title:"Crab Age Prediction",
       description: "Crab Age Prediction featuring data cleaning, feature correlation, and insights for building regression models.",
       image:"/projects/project6.png",
       tags:[ "NumPy", "Pandas", "Seaborn"," Matplotlib"],
       demoUrl:"a",
       githubUrl:"https://github.com/ranjuadhikari14/Crab-AGE-prediction", 
    },
     {
       id:6,
       title:"NetFlix Movie Data Analysis",
       description:"Exploratory data analysis of Netflix movie data with genre trends, content ratings, and release year insights using Python libraries.",
       image:"/projects/project7.png",

       tags:["NumPy", "Pandas", "Seaborn",],
       demoUrl:"a",
       githubUrl:"https://github.com/ranjuadhikari14/NetflixMovieDataAnalysis", 
    },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ranjuadhikari14"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};