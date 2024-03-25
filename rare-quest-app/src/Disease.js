const diseases = [
    {
      id: 1,
      name: "Rainbow Sneezes Syndrome (RSS)",
      information: "When someone with RSS sneezes, instead of regular sneeze droplets, a burst of tiny, colorful rainbows shoots out.",
      symptoms: ["Frequent sneezing", "Sudden bursts of joy", "A tendency to collect rainbows in jars"],
      treatment: "Regular exposure to sunlight and happy thoughts to enhance rainbow quality."
    },
    {
      id: 2,
      name: "Giggleitis",
      information: "Giggleitis is a contagious condition where laughter spreads like wildfire. It starts with a tiny giggle and soon escalates into full-blown belly laughs.",
      symptoms: ["Uncontrollable giggling", "Snorting", "A tendency to find even the most mundane things hilarious"],
      treatment: "Watching serious documentaries and practicing frowning in the mirror."
    },
    {
      id: 3,
      name: "Bubblegum Brain Syndrome (BBS)",
      information: "People with BBS have brains that resemble giant, squishy bubblegum balls. Their thoughts are sweet, stretchy, and sometimes sticky.",
      symptoms: ["Random bubblegum bubbles escaping from ears", "Daydreaming about candy", "Occasional brain freeze"],
      treatment: "Chewing sugar-free gum and engaging in puzzles to keep the mind sharp."
    },
    {
      id: 4,
      name: "Ticklefeather Fever",
      information: "A peculiar ailment causing a sensation of being tickled by invisible feathers at random times, leading to unexpected laughter and twitching.",
      symptoms: ["Sudden laughter for no reason", "Feeling of feathers on the skin", "Ticklishness without being touched"],
      treatment: "Wearing smooth, silk clothing and practicing meditation to calm the senses."
    },
    // Add more diseases based on your requirement...
  ];
  
  const getAllDiseases = () => {
    return diseases;
  };
  
  const getDiseaseById = (id) => {
    return diseases.find(disease => disease.id === id);
  };
  
  export { getAllDiseases, getDiseaseById };