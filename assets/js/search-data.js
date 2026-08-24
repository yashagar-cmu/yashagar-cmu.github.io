// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Machine learning systems, GPU kernels and low-level systems work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Machine learning systems, GPU kernels and compilers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-yesbut-a-benchmark-for-evaluating-vision-language-models-was-published-at-emnlp-2024",
          title: 'YesBut, a benchmark for evaluating vision-language models, was published at EMNLP 2024.',
          description: "",
          section: "News",},{id: "news-started-as-an-ai-performance-engineering-intern-at-modular-in-san-francisco",
          title: 'Started as an AI Performance Engineering intern at Modular in San Francisco.',
          description: "",
          section: "News",},{id: "projects-needle",
          title: 'Needle',
          description: "CUDA kernel optimization and an automatic differentiation engine, built from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/needle/";
            },},{id: "projects-malloc-cache-and-shell",
          title: 'Malloc, Cache and Shell',
          description: "Allocators, cache simulation and a Unix shell — the CMU systems gauntlet",
          section: "Projects",handler: () => {
              window.location.href = "/projects/systems/";
            },},{id: "projects-whisqer",
          title: 'WhisQer',
          description: "A quantization-trained Conformer for speech recognition, down to 1-bit weights",
          section: "Projects",handler: () => {
              window.location.href = "/projects/whisqer/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%73%68%61%67%61%72@%63%73.%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yashagar-cmu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yashagarwalcs", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
