const PLATE_REGISTRY = [
  { "id": "EQUIN2F",       "name": "Sensititre EQUIN2F",      "description": "Equine antimicrobial panel",        "plateType": 1 },
  { "id": "MCN_KLEINTIER", "name": "MICRONAUT-S Kleintier",   "description": "E1-319-100 · Small animal panel",   "plateType": 2 },
  { "id": "MCN_GROSSTIER", "name": "MICRONAUT-S Großtiere",   "description": "E1-318-100 · Large animal panel",   "plateType": 2 }
];

const PLATE_DATA = {
  "EQUIN2F": {
    "id": "EQUIN2F",
    "name": "Sensititre EQUIN2F",
    "description": "Equine antimicrobial panel",
    "plateType": 1,
    "rows": 8,
    "cols": 12,
    "drugs": [
      { "id": "ERY",  "abbreviation": "ERY",  "name": "Erythromycin", "wells": [
        { "row": 0, "col": 0,  "concentration": 0.25, "displayConc": "0.25" },
        { "row": 0, "col": 1,  "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 0, "col": 2,  "concentration": 1,    "displayConc": "1"    },
        { "row": 0, "col": 3,  "concentration": 2,    "displayConc": "2"    },
        { "row": 0, "col": 4,  "concentration": 4,    "displayConc": "4"    },
        { "row": 0, "col": 5,  "concentration": 8,    "displayConc": "8"    }
      ]},
      { "id": "CLA",  "abbreviation": "CLA",  "name": "Clarithromycin", "wells": [
        { "row": 0, "col": 6,  "concentration": 0.25, "displayConc": "0.25" },
        { "row": 0, "col": 7,  "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 0, "col": 8,  "concentration": 1,    "displayConc": "1"    },
        { "row": 0, "col": 9,  "concentration": 2,    "displayConc": "2"    },
        { "row": 0, "col": 10, "concentration": 4,    "displayConc": "4"    },
        { "row": 0, "col": 11, "concentration": 8,    "displayConc": "8"    }
      ]},
      { "id": "CHL",  "abbreviation": "CHL",  "name": "Chloramphenicol", "wells": [
        { "row": 1, "col": 0, "concentration": 4,  "displayConc": "4"  },
        { "row": 1, "col": 1, "concentration": 8,  "displayConc": "8"  },
        { "row": 1, "col": 2, "concentration": 16, "displayConc": "16" },
        { "row": 1, "col": 3, "concentration": 32, "displayConc": "32" }
      ]},
      { "id": "FAZ",  "abbreviation": "FAZ",  "name": "Cefazolin", "wells": [
        { "row": 1, "col": 4, "concentration": 1, "displayConc": "1" },
        { "row": 1, "col": 5, "concentration": 2, "displayConc": "2" },
        { "row": 1, "col": 6, "concentration": 4, "displayConc": "4" },
        { "row": 1, "col": 7, "concentration": 8, "displayConc": "8" }
      ]},
      { "id": "IMI",  "abbreviation": "IMI",  "name": "Imipenem", "wells": [
        { "row": 1, "col": 8,  "concentration": 1, "displayConc": "1" },
        { "row": 1, "col": 9,  "concentration": 2, "displayConc": "2" },
        { "row": 1, "col": 10, "concentration": 4, "displayConc": "4" },
        { "row": 1, "col": 11, "concentration": 8, "displayConc": "8" }
      ]},
      { "id": "OXAP", "abbreviation": "OXA+", "name": "Oxacillin + 2% NaCl", "wells": [
        { "row": 2, "col": 0, "concentration": 0.25, "displayConc": "0.25" },
        { "row": 2, "col": 1, "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 2, "col": 2, "concentration": 1,    "displayConc": "1"    },
        { "row": 2, "col": 3, "concentration": 2,    "displayConc": "2"    },
        { "row": 2, "col": 4, "concentration": 4,    "displayConc": "4"    }
      ]},
      { "id": "PEN",  "abbreviation": "PEN",  "name": "Penicillin", "wells": [
        { "row": 2, "col": 5,  "concentration": 0.12, "displayConc": "0.12" },
        { "row": 2, "col": 6,  "concentration": 0.25, "displayConc": "0.25" },
        { "row": 2, "col": 7,  "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 2, "col": 8,  "concentration": 1,    "displayConc": "1"    },
        { "row": 2, "col": 9,  "concentration": 2,    "displayConc": "2"    },
        { "row": 2, "col": 10, "concentration": 4,    "displayConc": "4"    },
        { "row": 2, "col": 11, "concentration": 8,    "displayConc": "8"    }
      ]},
      { "id": "ENRO", "abbreviation": "ENRO", "name": "Enrofloxacin", "wells": [
        { "row": 3, "col": 0, "concentration": 0.06, "displayConc": "0.06" },
        { "row": 3, "col": 1, "concentration": 0.12, "displayConc": "0.12" },
        { "row": 3, "col": 2, "concentration": 0.25, "displayConc": "0.25" },
        { "row": 3, "col": 3, "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 3, "col": 4, "concentration": 1,    "displayConc": "1"    }
      ]},
      { "id": "AMP",  "abbreviation": "AMP",  "name": "Ampicillin", "wells": [
        { "row": 3, "col": 5,  "concentration": 0.25, "displayConc": "0.25" },
        { "row": 3, "col": 6,  "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 3, "col": 7,  "concentration": 1,    "displayConc": "1"    },
        { "row": 3, "col": 8,  "concentration": 2,    "displayConc": "2"    },
        { "row": 3, "col": 9,  "concentration": 4,    "displayConc": "4"    },
        { "row": 3, "col": 10, "concentration": 8,    "displayConc": "8"    },
        { "row": 3, "col": 11, "concentration": 16,   "displayConc": "16"   }
      ]},
      { "id": "MIN",  "abbreviation": "MIN",  "name": "Minocycline", "wells": [
        { "row": 4, "col": 0, "concentration": 0.12, "displayConc": "0.12" },
        { "row": 4, "col": 1, "concentration": 0.25, "displayConc": "0.25" },
        { "row": 4, "col": 2, "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 4, "col": 3, "concentration": 1,    "displayConc": "1"    },
        { "row": 4, "col": 4, "concentration": 2,    "displayConc": "2"    }
      ]},
      { "id": "DOX",  "abbreviation": "DOX",  "name": "Doxycycline", "wells": [
        { "row": 4, "col": 5,  "concentration": 0.12, "displayConc": "0.12" },
        { "row": 4, "col": 6,  "concentration": 0.25, "displayConc": "0.25" },
        { "row": 4, "col": 7,  "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 4, "col": 8,  "concentration": 1,    "displayConc": "1"    },
        { "row": 4, "col": 9,  "concentration": 2,    "displayConc": "2"    },
        { "row": 4, "col": 10, "concentration": 4,    "displayConc": "4"    },
        { "row": 4, "col": 11, "concentration": 8,    "displayConc": "8"    }
      ]},
      { "id": "TAZ",  "abbreviation": "TAZ",  "name": "Ceftazidime", "wells": [
        { "row": 5, "col": 0, "concentration": 1,  "displayConc": "1"  },
        { "row": 5, "col": 1, "concentration": 2,  "displayConc": "2"  },
        { "row": 5, "col": 2, "concentration": 4,  "displayConc": "4"  },
        { "row": 5, "col": 3, "concentration": 8,  "displayConc": "8"  },
        { "row": 5, "col": 4, "concentration": 16, "displayConc": "16" }
      ]},
      { "id": "TET",  "abbreviation": "TET",  "name": "Tetracycline", "wells": [
        { "row": 5, "col": 5,  "concentration": 0.25, "displayConc": "0.25" },
        { "row": 5, "col": 6,  "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 5, "col": 7,  "concentration": 1,    "displayConc": "1"    },
        { "row": 5, "col": 8,  "concentration": 2,    "displayConc": "2"    },
        { "row": 5, "col": 9,  "concentration": 4,    "displayConc": "4"    },
        { "row": 5, "col": 10, "concentration": 8,    "displayConc": "8"    }
      ]},
      { "id": "AMI",  "abbreviation": "AMI",  "name": "Amikacin", "wells": [
        { "row": 6, "col": 0, "concentration": 2,  "displayConc": "2"  },
        { "row": 6, "col": 1, "concentration": 4,  "displayConc": "4"  },
        { "row": 6, "col": 2, "concentration": 8,  "displayConc": "8"  },
        { "row": 6, "col": 3, "concentration": 16, "displayConc": "16" },
        { "row": 6, "col": 4, "concentration": 32, "displayConc": "32" }
      ]},
      { "id": "XNL",  "abbreviation": "XNL",  "name": "Ceftiofur", "wells": [
        { "row": 6, "col": 5,  "concentration": 0.25, "displayConc": "0.25" },
        { "row": 6, "col": 6,  "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 6, "col": 7,  "concentration": 1,    "displayConc": "1"    },
        { "row": 6, "col": 8,  "concentration": 2,    "displayConc": "2"    },
        { "row": 6, "col": 9,  "concentration": 4,    "displayConc": "4"    },
        { "row": 6, "col": 10, "concentration": 8,    "displayConc": "8"    }
      ]},
      { "id": "GEN",  "abbreviation": "GEN",  "name": "Gentamicin", "wells": [
        { "row": 7, "col": 0, "concentration": 1, "displayConc": "1" },
        { "row": 7, "col": 1, "concentration": 2, "displayConc": "2" },
        { "row": 7, "col": 2, "concentration": 4, "displayConc": "4" },
        { "row": 7, "col": 3, "concentration": 8, "displayConc": "8" }
      ]},
      { "id": "RIF",  "abbreviation": "RIF",  "name": "Rifampin", "wells": [
        { "row": 7, "col": 4, "concentration": 1, "displayConc": "1" },
        { "row": 7, "col": 5, "concentration": 2, "displayConc": "2" },
        { "row": 7, "col": 6, "concentration": 4, "displayConc": "4" }
      ]},
      { "id": "SXT",  "abbreviation": "SXT",  "name": "Trimethoprim / Sulfamethoxazole", "wells": [
        { "row": 7, "col": 7,  "concentration": 0.5, "displayConc": "0.5/9.5" },
        { "row": 7, "col": 8,  "concentration": 1,   "displayConc": "1/19"    },
        { "row": 7, "col": 9,  "concentration": 2,   "displayConc": "2/38"    },
        { "row": 7, "col": 10, "concentration": 4,   "displayConc": "4/76"    }
      ]}
    ],
    "controls": [
      { "row": 5, "col": 11, "label": "POS" },
      { "row": 6, "col": 11, "label": "POS" },
      { "row": 7, "col": 11, "label": "POS" }
    ]
  },

  "MCN_KLEINTIER": {
    "id": "MCN_KLEINTIER",
    "name": "MICRONAUT-S Kleintier",
    "description": "E1-319-100 · Small animal antimicrobial panel",
    "plateType": 2,
    "rows": 8,
    "cols": 12,
    "drugs": [
      { "id": "PEN", "abbreviation": "PEN", "name": "Penicillin G", "wells": [
        { "row": 0, "col": 2, "concentration": 2,     "displayConc": "2"     },
        { "row": 0, "col": 3, "concentration": 1,     "displayConc": "1"     },
        { "row": 0, "col": 4, "concentration": 0.5,   "displayConc": "0.5"   },
        { "row": 0, "col": 5, "concentration": 0.25,  "displayConc": "0.25"  },
        { "row": 0, "col": 6, "concentration": 0.125, "displayConc": "0.125" }
      ]},
      { "id": "TS", "abbreviation": "T/S", "name": "Trimethoprim / Sulfamethoxazole", "wells": [
        { "row": 0, "col": 7,  "concentration": 2,     "displayConc": "2/38"       },
        { "row": 0, "col": 8,  "concentration": 1,     "displayConc": "1/19"       },
        { "row": 0, "col": 9,  "concentration": 0.5,   "displayConc": "0.5/9.5"   },
        { "row": 0, "col": 10, "concentration": 0.25,  "displayConc": "0.25/4.75"  },
        { "row": 0, "col": 11, "concentration": 0.125, "displayConc": "0.125/2.375"}
      ]},
      { "id": "AMP", "abbreviation": "AMP", "name": "Ampicillin", "wells": [
        { "row": 1, "col": 0, "concentration": 16,     "displayConc": "16"     },
        { "row": 1, "col": 1, "concentration": 8,      "displayConc": "8"      },
        { "row": 1, "col": 2, "concentration": 4,      "displayConc": "4"      },
        { "row": 1, "col": 3, "concentration": 2,      "displayConc": "2"      },
        { "row": 1, "col": 4, "concentration": 1,      "displayConc": "1"      },
        { "row": 1, "col": 5, "concentration": 0.5,    "displayConc": "0.5"    },
        { "row": 1, "col": 6, "concentration": 0.25,   "displayConc": "0.25"   },
        { "row": 1, "col": 7, "concentration": 0.125,  "displayConc": "0.125"  },
        { "row": 1, "col": 8, "concentration": 0.0625, "displayConc": "0.0625" }
      ]},
      { "id": "PRX", "abbreviation": "PRX", "name": "Pradofloxacin", "wells": [
        { "row": 1, "col": 9,  "concentration": 1,        "displayConc": "1"        },
        { "row": 1, "col": 10, "concentration": 0.5,      "displayConc": "0.5"      },
        { "row": 1, "col": 11, "concentration": 0.25,     "displayConc": "0.25"     },
        { "row": 2, "col": 8,  "concentration": 0.125,    "displayConc": "0.125"    },
        { "row": 2, "col": 9,  "concentration": 0.0625,   "displayConc": "0.0625"   },
        { "row": 2, "col": 10, "concentration": 0.03125,  "displayConc": "0.03125"  },
        { "row": 2, "col": 11, "concentration": 0.015625, "displayConc": "0.015625" }
      ]},
      { "id": "AMC", "abbreviation": "AMC", "name": "Amoxicillin / Clavulanic Acid", "wells": [
        { "row": 2, "col": 0, "concentration": 16,    "displayConc": "16/8"       },
        { "row": 2, "col": 1, "concentration": 8,     "displayConc": "8/4"        },
        { "row": 2, "col": 2, "concentration": 4,     "displayConc": "4/2"        },
        { "row": 2, "col": 3, "concentration": 2,     "displayConc": "2/1"        },
        { "row": 2, "col": 4, "concentration": 1,     "displayConc": "1/0.5"      },
        { "row": 2, "col": 5, "concentration": 0.5,   "displayConc": "0.5/0.25"   },
        { "row": 2, "col": 6, "concentration": 0.25,  "displayConc": "0.25/0.125" },
        { "row": 2, "col": 7, "concentration": 0.125, "displayConc": "0.125/0.0625"}
      ]},
      { "id": "CEX", "abbreviation": "CEX", "name": "Cephalexin", "wells": [
        { "row": 3, "col": 0, "concentration": 16, "displayConc": "16" },
        { "row": 3, "col": 1, "concentration": 8,  "displayConc": "8"  },
        { "row": 3, "col": 2, "concentration": 4,  "displayConc": "4"  },
        { "row": 3, "col": 3, "concentration": 2,  "displayConc": "2"  }
      ]},
      { "id": "ENR", "abbreviation": "ENR", "name": "Enrofloxacin", "wells": [
        { "row": 3, "col": 4,  "concentration": 2,        "displayConc": "2"        },
        { "row": 3, "col": 5,  "concentration": 1,        "displayConc": "1"        },
        { "row": 3, "col": 6,  "concentration": 0.5,      "displayConc": "0.5"      },
        { "row": 3, "col": 7,  "concentration": 0.25,     "displayConc": "0.25"     },
        { "row": 3, "col": 8,  "concentration": 0.125,    "displayConc": "0.125"    },
        { "row": 3, "col": 9,  "concentration": 0.0625,   "displayConc": "0.0625"   },
        { "row": 3, "col": 10, "concentration": 0.03125,  "displayConc": "0.03125"  },
        { "row": 3, "col": 11, "concentration": 0.015625, "displayConc": "0.015625" }
      ]},
      { "id": "CFV", "abbreviation": "CFV", "name": "Cefovecin", "wells": [
        { "row": 4, "col": 0, "concentration": 4,     "displayConc": "4"     },
        { "row": 4, "col": 1, "concentration": 2,     "displayConc": "2"     },
        { "row": 4, "col": 2, "concentration": 1,     "displayConc": "1"     },
        { "row": 4, "col": 3, "concentration": 0.5,   "displayConc": "0.5"   },
        { "row": 4, "col": 4, "concentration": 0.25,  "displayConc": "0.25"  },
        { "row": 4, "col": 5, "concentration": 0.125, "displayConc": "0.125" }
      ]},
      { "id": "GEN_MCN", "abbreviation": "GEN", "name": "Gentamicin", "wells": [
        { "row": 4, "col": 6,  "concentration": 4,     "displayConc": "4"     },
        { "row": 4, "col": 7,  "concentration": 2,     "displayConc": "2"     },
        { "row": 4, "col": 8,  "concentration": 1,     "displayConc": "1"     },
        { "row": 4, "col": 9,  "concentration": 0.5,   "displayConc": "0.5"   },
        { "row": 4, "col": 10, "concentration": 0.25,  "displayConc": "0.25"  },
        { "row": 4, "col": 11, "concentration": 0.125, "displayConc": "0.125" }
      ]},
      { "id": "CLI", "abbreviation": "CLI", "name": "Clindamycin", "wells": [
        { "row": 5, "col": 0, "concentration": 4,       "displayConc": "4"       },
        { "row": 5, "col": 1, "concentration": 2,       "displayConc": "2"       },
        { "row": 5, "col": 2, "concentration": 1,       "displayConc": "1"       },
        { "row": 5, "col": 3, "concentration": 0.5,     "displayConc": "0.5"     },
        { "row": 5, "col": 4, "concentration": 0.25,    "displayConc": "0.25"    },
        { "row": 5, "col": 5, "concentration": 0.125,   "displayConc": "0.125"   },
        { "row": 5, "col": 6, "concentration": 0.0625,  "displayConc": "0.0625"  },
        { "row": 5, "col": 7, "concentration": 0.03125, "displayConc": "0.03125" }
      ]},
      { "id": "FLL", "abbreviation": "FLL", "name": "Florfenicol", "wells": [
        { "row": 5, "col": 8,  "concentration": 8, "displayConc": "8" },
        { "row": 5, "col": 9,  "concentration": 4, "displayConc": "4" },
        { "row": 5, "col": 10, "concentration": 2, "displayConc": "2" },
        { "row": 5, "col": 11, "concentration": 1, "displayConc": "1" }
      ]},
      { "id": "ERY_MCN", "abbreviation": "ERY", "name": "Erythromycin", "wells": [
        { "row": 6, "col": 0, "concentration": 4, "displayConc": "4" },
        { "row": 6, "col": 1, "concentration": 2, "displayConc": "2" }
      ]},
      { "id": "DOX_MCN", "abbreviation": "DOX", "name": "Doxycycline", "wells": [
        { "row": 6, "col": 2, "concentration": 1,      "displayConc": "1"      },
        { "row": 6, "col": 3, "concentration": 0.5,    "displayConc": "0.5"    },
        { "row": 6, "col": 4, "concentration": 0.25,   "displayConc": "0.25"   },
        { "row": 6, "col": 5, "concentration": 0.125,  "displayConc": "0.125"  },
        { "row": 6, "col": 6, "concentration": 0.0625, "displayConc": "0.0625" }
      ]},
      { "id": "CMP", "abbreviation": "CMP", "name": "Chloramphenicol", "wells": [
        { "row": 6, "col": 7,  "concentration": 16, "displayConc": "16" },
        { "row": 6, "col": 8,  "concentration": 8,  "displayConc": "8"  },
        { "row": 6, "col": 9,  "concentration": 4,  "displayConc": "4"  },
        { "row": 6, "col": 10, "concentration": 2,  "displayConc": "2"  },
        { "row": 6, "col": 11, "concentration": 1,  "displayConc": "1"  }
      ]},
      { "id": "TET_MCN", "abbreviation": "TET", "name": "Tetracycline", "wells": [
        { "row": 7, "col": 0, "concentration": 4,     "displayConc": "4"     },
        { "row": 7, "col": 1, "concentration": 2,     "displayConc": "2"     },
        { "row": 7, "col": 2, "concentration": 1,     "displayConc": "1"     },
        { "row": 7, "col": 3, "concentration": 0.5,   "displayConc": "0.5"   },
        { "row": 7, "col": 4, "concentration": 0.25,  "displayConc": "0.25"  },
        { "row": 7, "col": 5, "concentration": 0.125, "displayConc": "0.125" }
      ]},
      { "id": "OXA", "abbreviation": "OXA", "name": "Oxacillin", "wells": [
        { "row": 7, "col": 6,  "concentration": 2,      "displayConc": "2"      },
        { "row": 7, "col": 7,  "concentration": 1,      "displayConc": "1"      },
        { "row": 7, "col": 8,  "concentration": 0.5,    "displayConc": "0.5"    },
        { "row": 7, "col": 9,  "concentration": 0.25,   "displayConc": "0.25"   },
        { "row": 7, "col": 10, "concentration": 0.125,  "displayConc": "0.125"  },
        { "row": 7, "col": 11, "concentration": 0.0625, "displayConc": "0.0625" }
      ]}
    ],
    "controls": [
      { "row": 0, "col": 0, "label": "GC" },
      { "row": 0, "col": 1, "label": "GC" }
    ]
  },

  "MCN_GROSSTIER": {
    "id": "MCN_GROSSTIER",
    "name": "MICRONAUT-S Großtiere",
    "description": "E1-318-100 · Large animal antimicrobial panel",
    "plateType": 2,
    "rows": 8,
    "cols": 12,
    "drugs": [
      { "id": "PEN_GRS", "abbreviation": "PEN", "name": "Penicillin G", "wells": [
        { "row": 0, "col": 2,  "concentration": 2,      "displayConc": "2"      },
        { "row": 0, "col": 3,  "concentration": 1,      "displayConc": "1"      },
        { "row": 0, "col": 4,  "concentration": 0.5,    "displayConc": "0.5"    },
        { "row": 0, "col": 5,  "concentration": 0.25,   "displayConc": "0.25"   },
        { "row": 0, "col": 6,  "concentration": 0.125,  "displayConc": "0.125"  },
        { "row": 0, "col": 7,  "concentration": 0.0625, "displayConc": "0.0625" }
      ]},
      { "id": "TET_GRS", "abbreviation": "TET", "name": "Tetracycline", "wells": [
        { "row": 0, "col": 8,  "concentration": 8,    "displayConc": "8"    },
        { "row": 0, "col": 9,  "concentration": 4,    "displayConc": "4"    },
        { "row": 0, "col": 10, "concentration": 2,    "displayConc": "2"    },
        { "row": 0, "col": 11, "concentration": 1,    "displayConc": "1"    },
        { "row": 1, "col": 10, "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 1, "col": 11, "concentration": 0.25, "displayConc": "0.25" }
      ]},
      { "id": "AMP_GRS", "abbreviation": "AMP", "name": "Ampicillin", "wells": [
        { "row": 1, "col": 0, "concentration": 16,       "displayConc": "16"       },
        { "row": 1, "col": 1, "concentration": 8,        "displayConc": "8"        },
        { "row": 1, "col": 2, "concentration": 4,        "displayConc": "4"        },
        { "row": 1, "col": 3, "concentration": 2,        "displayConc": "2"        },
        { "row": 1, "col": 4, "concentration": 1,        "displayConc": "1"        },
        { "row": 1, "col": 5, "concentration": 0.5,      "displayConc": "0.5"      },
        { "row": 1, "col": 6, "concentration": 0.25,     "displayConc": "0.25"     },
        { "row": 1, "col": 7, "concentration": 0.125,    "displayConc": "0.125"    },
        { "row": 1, "col": 8, "concentration": 0.0625,   "displayConc": "0.0625"   },
        { "row": 1, "col": 9, "concentration": 0.03125,  "displayConc": "0.03125"  }
      ]},
      { "id": "AMC_GRS", "abbreviation": "AMC", "name": "Amoxicillin / Clavulanic Acid", "wells": [
        { "row": 2, "col": 0, "concentration": 16, "displayConc": "16/8"   },
        { "row": 2, "col": 1, "concentration": 8,  "displayConc": "8/4"    },
        { "row": 2, "col": 2, "concentration": 4,  "displayConc": "4/2"    },
        { "row": 2, "col": 3, "concentration": 2,  "displayConc": "2/1"    },
        { "row": 2, "col": 4, "concentration": 1,  "displayConc": "1/0.5"  }
      ]},
      { "id": "ENR_GRS", "abbreviation": "ENR", "name": "Enrofloxacin", "wells": [
        { "row": 2, "col": 5,  "concentration": 1,        "displayConc": "1"        },
        { "row": 2, "col": 6,  "concentration": 0.5,      "displayConc": "0.5"      },
        { "row": 2, "col": 7,  "concentration": 0.25,     "displayConc": "0.25"     },
        { "row": 2, "col": 8,  "concentration": 0.125,    "displayConc": "0.125"    },
        { "row": 2, "col": 9,  "concentration": 0.0625,   "displayConc": "0.0625"   },
        { "row": 2, "col": 10, "concentration": 0.03125,  "displayConc": "0.03125"  },
        { "row": 2, "col": 11, "concentration": 0.015625, "displayConc": "0.015625" }
      ]},
      { "id": "CET", "abbreviation": "CET", "name": "Ceftiofur", "wells": [
        { "row": 3, "col": 0, "concentration": 4,     "displayConc": "4"     },
        { "row": 3, "col": 1, "concentration": 2,     "displayConc": "2"     },
        { "row": 3, "col": 2, "concentration": 1,     "displayConc": "1"     },
        { "row": 3, "col": 3, "concentration": 0.5,   "displayConc": "0.5"   },
        { "row": 3, "col": 4, "concentration": 0.25,  "displayConc": "0.25"  },
        { "row": 3, "col": 5, "concentration": 0.125, "displayConc": "0.125" }
      ]},
      { "id": "GAM", "abbreviation": "GAM", "name": "Gamithromycin", "wells": [
        { "row": 3, "col": 6,  "concentration": 8,    "displayConc": "8"    },
        { "row": 3, "col": 7,  "concentration": 4,    "displayConc": "4"    },
        { "row": 3, "col": 8,  "concentration": 2,    "displayConc": "2"    },
        { "row": 3, "col": 9,  "concentration": 1,    "displayConc": "1"    },
        { "row": 3, "col": 10, "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 3, "col": 11, "concentration": 0.25, "displayConc": "0.25" }
      ]},
      { "id": "TILM", "abbreviation": "TILM", "name": "Tilmicosin", "wells": [
        { "row": 4, "col": 0, "concentration": 16,  "displayConc": "16"  },
        { "row": 4, "col": 1, "concentration": 8,   "displayConc": "8"   },
        { "row": 4, "col": 2, "concentration": 4,   "displayConc": "4"   },
        { "row": 4, "col": 3, "concentration": 2,   "displayConc": "2"   },
        { "row": 4, "col": 4, "concentration": 1,   "displayConc": "1"   },
        { "row": 4, "col": 5, "concentration": 0.5, "displayConc": "0.5" }
      ]},
      { "id": "TDP", "abbreviation": "TDP", "name": "Tildipirosin", "wells": [
        { "row": 4, "col": 6,  "concentration": 32, "displayConc": "32" },
        { "row": 4, "col": 7,  "concentration": 16, "displayConc": "16" },
        { "row": 4, "col": 8,  "concentration": 8,  "displayConc": "8"  },
        { "row": 4, "col": 9,  "concentration": 4,  "displayConc": "4"  },
        { "row": 4, "col": 10, "concentration": 2,  "displayConc": "2"  },
        { "row": 4, "col": 11, "concentration": 1,  "displayConc": "1"  }
      ]},
      { "id": "TUL", "abbreviation": "TUL", "name": "Tulathromycin", "wells": [
        { "row": 5, "col": 0, "concentration": 64, "displayConc": "64" },
        { "row": 5, "col": 1, "concentration": 32, "displayConc": "32" },
        { "row": 5, "col": 2, "concentration": 16, "displayConc": "16" },
        { "row": 5, "col": 3, "concentration": 8,  "displayConc": "8"  },
        { "row": 5, "col": 4, "concentration": 4,  "displayConc": "4"  },
        { "row": 5, "col": 5, "concentration": 2,  "displayConc": "2"  },
        { "row": 5, "col": 6, "concentration": 1,  "displayConc": "1"  }
      ]},
      { "id": "ERY_GRS", "abbreviation": "ERY", "name": "Erythromycin", "wells": [
        { "row": 5, "col": 7, "concentration": 4, "displayConc": "4" },
        { "row": 5, "col": 8, "concentration": 2, "displayConc": "2" }
      ]},
      { "id": "COL", "abbreviation": "COL", "name": "Colistin", "wells": [
        { "row": 5, "col": 9,  "concentration": 2,   "displayConc": "2"   },
        { "row": 5, "col": 10, "concentration": 1,   "displayConc": "1"   },
        { "row": 5, "col": 11, "concentration": 0.5, "displayConc": "0.5" }
      ]},
      { "id": "TIA", "abbreviation": "TIA", "name": "Tiamulin", "wells": [
        { "row": 6, "col": 0, "concentration": 16,   "displayConc": "16"   },
        { "row": 6, "col": 1, "concentration": 8,    "displayConc": "8"    },
        { "row": 6, "col": 2, "concentration": 4,    "displayConc": "4"    },
        { "row": 6, "col": 3, "concentration": 2,    "displayConc": "2"    },
        { "row": 6, "col": 4, "concentration": 1,    "displayConc": "1"    },
        { "row": 6, "col": 5, "concentration": 0.5,  "displayConc": "0.5"  },
        { "row": 6, "col": 6, "concentration": 0.25, "displayConc": "0.25" }
      ]},
      { "id": "TS_GRS", "abbreviation": "T/S", "name": "Trimethoprim / Sulfamethoxazole", "wells": [
        { "row": 6, "col": 7,  "concentration": 2,     "displayConc": "2/38"        },
        { "row": 6, "col": 8,  "concentration": 1,     "displayConc": "1/19"        },
        { "row": 6, "col": 9,  "concentration": 0.5,   "displayConc": "0.5/9.5"    },
        { "row": 6, "col": 10, "concentration": 0.25,  "displayConc": "0.25/4.75"  },
        { "row": 6, "col": 11, "concentration": 0.125, "displayConc": "0.125/2.375"}
      ]},
      { "id": "GEN_GRS", "abbreviation": "GEN", "name": "Gentamicin", "wells": [
        { "row": 7, "col": 0, "concentration": 8,      "displayConc": "8"      },
        { "row": 7, "col": 1, "concentration": 4,      "displayConc": "4"      },
        { "row": 7, "col": 2, "concentration": 2,      "displayConc": "2"      },
        { "row": 7, "col": 3, "concentration": 1,      "displayConc": "1"      },
        { "row": 7, "col": 4, "concentration": 0.5,    "displayConc": "0.5"    },
        { "row": 7, "col": 5, "concentration": 0.25,   "displayConc": "0.25"   },
        { "row": 7, "col": 6, "concentration": 0.125,  "displayConc": "0.125"  },
        { "row": 7, "col": 7, "concentration": 0.0625, "displayConc": "0.0625" }
      ]},
      { "id": "FLL_GRS", "abbreviation": "FLL", "name": "Florfenicol", "wells": [
        { "row": 7, "col": 8,  "concentration": 8, "displayConc": "8" },
        { "row": 7, "col": 9,  "concentration": 4, "displayConc": "4" },
        { "row": 7, "col": 10, "concentration": 2, "displayConc": "2" },
        { "row": 7, "col": 11, "concentration": 1, "displayConc": "1" }
      ]}
    ],
    "controls": [
      { "row": 0, "col": 0, "label": "GC" },
      { "row": 0, "col": 1, "label": "GC" }
    ]
  }
};
