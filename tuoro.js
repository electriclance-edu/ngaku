var sponsors = {
  drinksFoundation:{
    name:"The Drinks Foundation",
    desc:"A massive, semi-independent entity from Kalimba that deals with the mass-production of food products. Mostly supplies drinks."
  },
  otherWorlds:{
    name:"Other Worlds Labs Hub-724",
    desc:"A large cross-timeline outpost constructed by Subject-Z4. Is surrounded by a suburban and city area, supplying the outpost with riches and knowledge."
  },
  hiukukikannochifon:{
    name:"Hiukukikanno-chifon Facility",
    desc:"A vast underground facility responsible for exploring the esoteric corners of science - all in the hopes that they may stumble upon something strong enough to destroy a god."
  },
  contingencyCenter: {
    name:"Kaliki Precursor Contingency Center",
    desc:"Since Kalimba's people had been sent before the onslaught of the Precursors, some of it's members saw fit to find methods to help those who would partake in the future battle between gods."
  }
}
var infocache = {
  b28vc:{
    name:"b2-8vc: Old Forest Cache 8",
    desc:"A medium-sized Anaxi cache of knowledge found in a grove in a long-dead Satose forest. Held knowledge related to Satose forest ecology, specifically long-extinct species and their interactions with Anaxi scholars."
  }
}
var items = {

}

/*
link format:
  |content・function name・parameter1,parameter2...・className|
*className is optional
*/
var infospringArticles = {
  spark_owl:{
    pretext:[
      "The following information is taken from an Anaxi Infocache (code: |b2-8vc・Infobox.display・infocache.b28vc・infoboxer|) and as such will not reflect present-day conditions."
    ],
    databox:{
      header:"Spark owl",
      image:"images/placeholder.png",
      caption:"A roosting spark owl.",
      sections:{
        general_info:[
          "Ecological status: ", "Safe",
          "Satose term: ", "Mi'inio Iserikui"
        ],
        magical_attributes:[
          "|Resonant magic・open・'resonance'|:", "|Fire・open・'base_magical_element','fire'|, |Darkness・open・'base_magical_element','darkness'|",
          "Magical capacity:", "Grade 3"
        ]
      }
    },
    sections:{
      skip:[
        "Spark owls are very large birds, the only extant member of the fire-based songbirds. They receive their name from their bursts of fire used to support their unique acoustic attacks, at night visible like a bright spark. They possess a vast wingspan, approximately seven times the length of their body, feathered with plumage capable of absorbing and reemiting sounds, an ability known as sound stasis. This gives spark owls the ability to fly completely silently, allowing them to swoop down on pray without alerting them."
      ],
      habitat:[
        "Spark owls, like most songbirds, live their entire lives within |Satose forests・open・'list_of_ancient_biomes','satose forest'|. Outside these environments constantly filled with sound, spark owls have difficulty gathering enough energy in their feathers, and typically starve to death due to their inability to perform their attack."
      ],
      feeding:[
        "Spark owls possess an extremely unique hunting style, relying on their capability to absorb and reemit sounds. Spark owls gather energy within their feathers over time through ambient noise, gathering energy until a specific threshold is reached. Once this happens, the owl will swoop down on prey and release a deadly sonic blast, the sound waves of which are capable of reaching up to 200 decibels. Normal atmospheric pressure is incapable of supporting such a powerful blast, which is why the owl tactically releases fire to increase air density for a split second.",
        "The attack of a spark owl is enough to fatally damage most creatures. The only creatures capable of physically withstanding such a shockwave are those of the |Stalwart・open・'minor_clans','stalwart'| clan, though not without injury.<br>Another unique ability of the spark owl is their ability to metabolize |Darkness energy・open・'elements','darkness'| into |Fire energy・open・'base_magical_element','fire'|. As such, their prey are typically members of the |Darkness clans・open・'darkness_clans'|."
      ],
      human_impact:[
        "Spark owls are a frequent nuisance of Darkness |ward forgers・open・'wards','ward_forgers'|, as the bubble of night around darkness |wardstones・open・'wards','wardstones'| frequently attract spark owls searching for food. In biomes with large numbers of Spark owls (eg. |Satose forests・open・'list_of_ancient_biomes','satose_forest'|) Darkness wardstones are quickly weathered down by misled Spark owls.",
        "Spark owl feathers are a valuable scientific commodity, as the ability to both store and release acoustic energy with such efficiency is rarely seen.",
      ]
    }
  },
  base_magical_element:{
    pretext:[""],
    databox:{
      header:"Magical Elements",
      image:"images/placeholder.png",
      caption:"A chart of known and theorized magical element groups.",
      sections:{
        general_info:[
          "Satose term:","Ai'mifun"
        ]
      }
    },
    sections:{
      skip:[
        "In magic, a base magical element (also referred to as a Ai'mifun) is a particle type derived from |base magical energy・open・'base_energy'|. ",
        "The name 'base' in 'base magical element' comes from these elements ubiquitous usage in |magic・open・'magic'|, such as in songspells or by |magical creatures・open・'magical_creatures'|.",
        "However, outside this human-based criteria of basality, the term is arbitrary; there is no way to scientifically determine a magical particle is basal given a completely non-biased environment. As such, while the term is commonly used in spellforming and other related fields, more theoretical ones resort to the Satose term Ai'mifun.",
        "The base magical elements are typically categorized into three groups: the Essential, Manipulative, and Determinant. These groups are further divided into generations based on their |order of derivation・open・'complexes','derivative order'|."
      ],
      essential_group:[
        "The Essential group elements are the first ><>< elements that are capable of forming |essentias・open・'essentia'|, condensed forms of magic embedded in crystals and other media. They are capable of this due to their high resonance with certain physical phenomena.",
        "The Fundamental Group of elements are the ><>< currently-known base elements that completely interact under the theorized element of Law.",
      ],
      manipulative_group:[
        "Particles of the Manipulative group possess many unique properties. They are composed of trillions of base energy particles, far surpassing the most complex Essential group particle by a factor of billions. This disparity is similar to a single cell compared to a whole human hand, the unexplained nature of which is considered an |unresolved problem of magic・open・'major_unsolved_problems_of_magic'|.",
        "Another hallmark of the Manipulative particles is that currently, there are no known |song-based resonor structures・open・'resonor_structures','song-based'| capable of manipulating them.",
        "The main trait of the Manipulative group particles is their capability to interact with the Essential group. This capability is taken advantage of to allow for all of magic. Without the Manipulative group, forming shift structures, and thus doing any magic, would be nearly impossible.",
        "<h4>Life</h4>Life is a first-generation Manipulative group particle that resonates well with chemical reactions. Due to this, living organisms inherently are hotspots for life particles to gather. Over time, as life evolved, so too did it's relationship with the Life particle. Life allowed forlelelelelelelelelel sleepy",
        "<h4>Cognition</h4>"
      ],
      determinant_group:[
        "The Determinant group of magical particles are particles beyond the Essential and Manipulative groups. They are vastly more complex than all known physical systems, including the Universe itself. This complexity surpasses the |Resonant Limit・open・'resonor_structures','Resonant Limit'|, meaning it is impossible to create, manipulate, employ, or destroy Determinant particles under current magical theory.",
        "The only member of the Determinant group, and the most recently discovered magical base element, is Law. Unlike all other known elements, which appear in profuse quantities throughout the universe, there is only one singular particle of Law in the entire universe, referred to as the Koukali (Satose: home-domain). It is theorized that the boundaries of the universe are determined by the size of the Koukali.",
        "The Koukali can freely interact with physical pro determines all fundamental constants, fields, and interactions - effectively it is the origin of physics. The Koukali has been observed to be unchangable, which is logically impossible due to the implication that the particle must've existed since before energy existed in our universe.",
        "While the discovery of the Koukali solved many problems in magical theory, (eg. |why magic could interact with the physical world in the first place・open・'Union of magic and physics'|), physical theory, ironically, did not benefit from it. The Koukali's incredibly weak |resonance・open・'resonance'|, combined with it's extreme complexity means that obtaining a significant understanding of it's structure, a facet of it's properties integral to gaining insight on physical laws."
      ],
      theoretical_basal_particles:[
        "<h4>Fate</h4>Fate is a theoretical first-generation Determinant group particle beyond Law. It's position above the Koukali serves as a solution to the existence of |Gods・open・'gods'|, as physical law would be surpassable given a strong enough course within a given Fate particle.",
        "There is evidence that suggests the Precursor civilization had detected traces of a Fate-like particle.",
        "(fate is actually intent, and the only higher dimensional particle cognition can interact with) (this implies the laws of the universe are transcendable given a powerful enough intent, and that it isn't determined by fate and destiny) (fate is actually a complex of law, and one that links multiple universes)",
        "<h4>Time</h4>Though Law particles determine the nature of physical law, the passage of time is not determined by it. While there is no known answer to why time passes, a proposed solution is that our universe 'rides' on a particle of Time.",
        "<h4>Complexity</h4>"
      ]
    }
  },
  default:{
    pretext:[""],
    databox:{
      header:"",
      image:"",
      caption:"",
      sections:{
        section:[
          "title:","data"
        ]
      }
    },
    sections:{
      section:[
        "text |content・func・param|"
      ]
    }
  },
}
