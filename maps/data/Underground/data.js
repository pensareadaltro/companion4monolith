Underground = {
	description: {
		title: {
			'fr': "Grotte",
            'en': "Underground"
        },
        version: '1.0',
        format: '1.0',
        origin: 'stygie',
        copyright: 'Monolith',
        rules: [ 
            {
                title: { 
                    'fr': "Emprunter un puits",
                    'en': "Moving Through a Well"
                },
                description: { 
                    'fr': "le plateau est composé de deux niveaux dont le niveau « 1 » est exactement superposé au niveau « 0 ».<br/>Le niveau est indiqué par un pictogramme en bas à gauche de chaque niveau. Un personnage, avec ou sans la compétence Escalade, présent dans la zone d’un puits peut l’emprunter pour se déplacer du niveau « 1 » au niveau « 0 » (et inversement) pour un surcoût de 2 points de mouvement.<br/>Emprunter un puits permet de se déplacer dans la zone du puits trouvant exactement à sa verticale (au niveau supérieur ou inférieur). Les Scorpions géants peuvent emprunter les puits sans pénalité de mouvement.",
                    'en': "The game board represents 2 levels of a Stygian temple with level « 1 » being exactly on top of level « 0 ».<br/>The level is indicated by an icon on the lower-left corner of each level. A character with or without Climb in the opened well's area may move from level « 1 » to level « 0 » (and the other way) by spending 2 extra movement points.<br/>Moving through a well takes a character's model to the area with a well token directly above or below. The Giant Scorpions may move through all the wells, opened or not, with no movement penalty."
                },
                coordinates: []
            }, {
                title: { 
                    'fr': "Passages secrets",
                    'en': "Moving Through Secret Passages"
                },
                description: { 
                    'fr': "chaque niveau est parcouru par un réseau de passages secrets dont les entrées sont représentées par un pion. Un personnage dans la zone d’un passage secret peut se déplacer vers une autre zone avec un passage secret du même niveau en dépensant 2 points de mouvement supplémentaires.<br/>Les unités de l’Overlord et Ikhmet connaissent les recoins du temple et ignorent cette pénalité.<br/>Les zones de départ et d’arrivée doivent être vides d’ennemis.",
                    'en': "each level is traversed by a network of secret passages which entrances are represented by secret passage tokens. A character in an area with a secret passage may move to another area with a secret passage of the same level by spending 2 extra movement points.<br/>To move through a secret passage, both areas with the entrance and the exit must be clear of enemies. The Overlord's units and Ikhmet know the nooks of the temple and may move through a secret passage with no movement penalty."
                },
                coordinates: []
            }, {
                title: { 
                    'fr': "Obscurité",
                    'en': "Darkness"
                },
                description: { 
                    'fr': "le dédale des tunnels est plongé dans une obscurité impénétrable. Il n’existe pas de ligne de vue entre deux zones différentes sur tout le plateau. Toute action nécessitant une ligne de vue ne peut être réalisée que dans une même zone.",
                    'en': "the maze of tunnels is plunged into an impenetrable darkness. There is no line of sight between two different areas of the whole board. Each action that requires a line of sight can only be performed within a single area."
                },
                coordinates: []
            }
        ],
        totopic: {
            'fr': "https://the-overlord.com/index.php?/topic/806-stygie-carte-souterrains/",
            'en': "https://the-overlord.net/index.php?/topic/35-stygia-underground/"
        },
        losFile: true
	},
	size: [1078, 924],
    zones: {
        "1": {
            'area': [[69.76, 7.25], [71.52, 6.93], [72.36, 7.68], [73.93, 6.6], [79.68, 6.49], [79.04, 18.83], [72.63, 19.16], [72.36, 14.94], [71.52, 14.5], [70.22, 13.96]],
            'centers': [[74.95, 12.55]],
            'links': [/*"1#50#1", "1#36#1", "1#14#1", "1#3#1", "1#47#1"*/]
        },
        "2": {
            'area': [[65.96, 6.82], [69.57, 7.25], [69.94, 13.96], [69.29, 14.07], [68.74, 14.5], [68.46, 15.48], [68.55, 17.42], [68.65, 18.51], [69.76, 19.7], [69.57, 21.1], [69.67, 22.73], [69.48, 25.11], [53.9, 25.65], [53.99, 23.38], [54.45, 21.54], [54.92, 19.05], [55.01, 16.77], [61.22, 12.99]],
            'centers': [[63.64, 17.42]],
            'links': [/*"1#50#1", "1#30#1"*/]
        },
        "3": {
            'area': [[71.15, 55.41], [77.92, 53.35], [77.27, 54.65], [77.18, 55.95], [77.92, 57.79], [78.66, 59.52], [79.41, 60.28], [80.61, 61.04], [83.3, 61.69], [85.44, 62.01], [87.29, 62.45], [84.42, 75.43], [77.37, 74.57], [78.11, 68.4], [70.13, 64.39], [70.78, 60.93], [70.87, 59.42], [70.78, 58.33], [70.87, 56.28]],
            'centers': [[76.53, 65.69]],
            'links': [/*"1#1#1", "1#36#1", "1#14#1", "1#47#1", "1#8#1"*/]
        },
        "4": {
            'area': [[67.35, 78.25], [66.98, 97.29], [66.14, 97.51], [65.21, 97.84], [64.56, 98.16], [63.91, 98.59], [62.62, 98.59], [60.02, 97.19], [58.91, 97.62], [57.42, 97.29], [55.84, 97.29], [54.55, 96.97], [53.8, 96.43], [53.34, 94.26], [53.34, 92.32], [53.15, 89.29], [53.34, 85.39], [53.8, 83.87], [55.47, 82.79], [58.72, 81.28], [60.58, 80.3], [63.17, 79], [64.47, 78.68]],
            'centers': [[60.39, 88.1]],
            'links': [/*"1#45#1", "1#35#1", "1#5#1"*/]
        },
        "5": {
            'area': [[82.28, 81.06], [82, 96.65], [80.8, 97.08], [79.59, 97.29], [78.85, 97.29], [78.39, 96.97], [77.27, 97.29], [76.35, 97.29], [75.97, 97.08], [74.58, 96.86], [73.56, 97.08], [73.38, 97.4], [71.52, 97.94], [69.29, 97.94], [67.9, 97.94], [67.44, 97.51], [67.81, 78.14], [68.65, 78.57], [70.04, 79.33], [71.06, 80.63], [72.63, 81.17], [74.3, 81.49], [75.32, 81.6], [77.09, 81.6], [79.13, 81.49], [80.43, 81.6], [81.26, 81.6]],
            'centers': [[74.86, 88.2]],
            'links': [/*"1#45#1", "1#35#1", "1#4#1"*/]
        },
        "6": {
            'area': [[37.29, 51.08], [46.38, 51.19], [46.66, 67.21], [36.92, 66.77], [37.48, 65.15], [37.85, 63.64]],
            'centers': [[42.02, 59.31]],
            'links': [/*"1#12#1", "1#19#1", "1#33#1", "1#29#1", "1#13#1"*/]
        },
        "7": {
            'area': [[16.7, 83.33], [31.26, 77.38], [31.45, 81.82], [32, 85.93], [31.91, 88.96], [28.29, 90.04], [27.92, 89.83], [26.99, 89.72], [26.9, 91.77], [21.99, 91.99], [21.71, 90.04], [20.96, 90.48], [16.51, 90.8], [16.7, 87.88], [16.14, 86.9]],
            'centers': [[24.21, 84.74]],
            'links': [/*"1#13#1", "1#42#1", "1#26#1", "1#40#1", "1#39#1"*/]
        },
        "8": {
            'area': [[87.57, 62.45], [88.96, 62.88], [90.45, 62.88], [92.21, 62.88], [94.16, 62.77], [94.99, 62.66], [95.45, 67.42], [95.83, 73.16], [96.38, 74.78], [96.1, 83.77], [84.79, 79.65], [84.97, 78.25], [85.34, 76.19], [84.69, 75.43]],
            'centers': [[91.09, 71.75]],
            'links': [/*"1#3#1", "1#47#1", "1#45#1", "1#35#1"*/]
        },
        "9": {
            'area': [[8.72, 45.67], [18.37, 51.52], [18.55, 52.71], [10.3, 65.8], [2.97, 65.48], [3.25, 53.14], [6.59, 52.49]],
            'centers': [[9.93, 56.28]],
            'links': [/*"1#22#1", "1#10#1", "1#37#1", "1#16#1", "1#49#1"*/]
        },
        "10": {
            'area': [[2.88, 19.81], [11.78, 22.94], [12.15, 34.42], [11.6, 34.63], [12.06, 37.88], [7.33, 40.15], [6.77, 37.77], [1.76, 37.77], [2.04, 21.43], [2.69, 20.78]],
            'centers': [[7.33, 30.74]],
            'links': [/*"1#22#1", "1#44#1", "1#37#1", "1#9#1", "1#49#1"*/]
        },
        "11": {
            'area': [[60.2, 47.29], [65.96, 52.16], [65.68, 53.46], [67.07, 54.55], [68.18, 54.87], [67.9, 57.36], [67.72, 58.87], [67.35, 59.96], [67.25, 60.82], [67.16, 61.9], [66.23, 64.72], [65.58, 66.34], [65.21, 67.21], [65.12, 68.61], [65.03, 69.81], [64.19, 71.65], [63.64, 71.86], [58.44, 53.25]],
            'centers': [[63.17, 56.17]],
            'links': [/*"1#20#1", "1#17#1", "1#27#1"*/]
        },
        "12": {
            'area': [[21.43, 23.92], [42.21, 23.92], [42.3, 24.68], [49.26, 25.11], [49.35, 30.63], [21.06, 31.39]],
            'centers': [[44.9, 27.38], [24.68, 27.38]],
            'links': [/*"2#38#1", "2#32#1", "2#34#1", "2#25#1", "2#51#1", "2#23#1", "2#46#1", "1#19#1", "1#6#1", "1#29#1", "1#13#1"*/]
        },
        "13": {
            'area': [[40.82, 81.49], [45.73, 80.95], [45.55, 88.96], [40.07, 88.74]],
            'centers': [[43.23, 84.74]],
            'links': [/*"1#12#1", "1#19#1", "1#33#1", "1#6#1", "1#29#1", "1#7#1"*/]
        },
        "14": {
            'area': [[73.01, 36.26], [79.96, 36.69], [79.78, 38.1], [79.22, 39.94], [79.04, 41.45], [78.76, 43.29], [78.39, 45.56], [77.74, 47.51], [77.55, 49.46], [77.74, 51.95], [78.01, 53.14], [70.96, 55.09], [70.69, 54.33], [70.04, 52.92], [69.67, 51.52], [69.39, 51.19], [68.55, 50.97], [68, 43.61], [69.29, 42.75], [70.69, 41.77], [71.61, 40.58], [72.45, 38.96]],
            'centers': [[76.72, 44.91]],
            'links': [/*"1#1#1", "1#36#1", "1#20#1", "1#17#1", "1#3#1", "1#47#1"*/]
        },
        "15": {
            'area': [[90.07, 43.07], [94.62, 42.97], [94.9, 43.83], [96.29, 45.13], [95.27, 54.76], [88.87, 54.65]],
            'centers': [[91.93, 50.76]],
            'links': [/*"1#31#1", "1#28#1", "1#21#1", "1#48#1"*/]
        },
        "16": {
            'area': [[2.69, 41.02], [6.68, 40.8], [8.53, 45.35], [6.59, 52.38], [3.15, 52.92]],
            'centers': [[3.62, 46]],
            'links': [/*"1#37#1", "1#9#1", "1#49#1"*/]
        },
        "17": {
            'area': [[55.47, 41.02], [58.26, 41.88], [59.74, 46.86], [58.26, 53.03], [54.27, 56.71], [54.36, 52.6], [54.64, 49.89], [54.55, 48.27], [54.82, 45.45], [55.19, 43.29]],
            'centers': [[56.68, 47.62]],
            'links': [/*"1#14#1", "1#20#1", "1#11#1", "1#27#1"*/]
        },
        "18": {
            'area': [[9.65, 69.7], [9.46, 78.57], [3.8, 79.33], [3.34, 70.45]],
            'centers': [[6.59, 74.89]],
            'links': [/*"1#42#1", "1#26#1", "1#40#1", "1#41#1"*/]
        },
        "19": {
            'area': [[41.37, 30.95], [48.89, 31.06], [46.66, 50.87], [37.29, 50.76], [36.83, 42.1], [42.02, 40.69], [42.02, 35.5], [41, 33.87], [41.28, 32.25]],
            'centers': [[43.78, 41.13]],
            'links': [/*"1#12#1", "1#33#1", "1#6#1", "1#29#1", "1#13#1"*/]
        },
        "20": {
            'area': [[58.91, 41.45], [60.11, 42.32], [61.32, 43.07], [62.71, 44.05], [63.73, 44.37], [64.94, 44.16], [65.77, 44.05], [67.44, 43.72], [68.37, 50.97], [67.07, 50.76], [65.86, 51.41], [66.05, 51.95], [60.3, 46.97]],
            'centers': [[64.1, 46.43]],
            'links': [/*"1#14#1", "1#17#1", "1#11#1", "1#27#1"*/]
        },
        "21": {
            'area': [[88.13, 30.95], [94.43, 30.95], [94.53, 33.98], [94.71, 35.17], [94.99, 36.58], [94.99, 38.96], [94.71, 41.13], [94.71, 42.75], [83.86, 42.97], [83.49, 40.8], [83.95, 38.74], [84.51, 37.34], [84.88, 36.47], [84.88, 35.06], [85.25, 34.42], [86.55, 33.66], [87.29, 33.33], [88.13, 32.68]],
            'centers': [[90.17, 38.64]],
            'links': [/*"1#31#1", "1#28#1", "1#48#1", "1#15#1"*/]
        },
        "22": {
            'area': [[2.32, 3.68], [19.39, 3.03], [19.94, 12.99], [18.55, 20.02], [11.69, 22.84], [2.97, 19.48]],
            'centers': [[13.27, 6.82]],
            'links': [/*"1#10#1", "1#44#1", "1#9#1"*/]
        },
        "23": {
            'area': [[20.78, 46.32], [29.22, 47.51], [32.37, 55.63], [34.42, 56.82], [34.88, 63.74], [29.59, 64.07], [28.39, 54.33], [21.43, 53.03]],
            'centers': [[29.68, 53.35]],
            'links': [/*"1#38#1", "1#12#2", "1#25#1", "1#51#1", "1#46#1"*/]
        },
        "24": {
            'area': [[31.08, 93.72], [39.7, 92.86], [40.91, 93.72], [42.49, 94.26], [42.49, 95.67], [43.88, 96.1], [45.27, 96.97], [46.94, 97.19], [48.14, 97.94], [48.89, 98.38], [49.91, 99.03], [50.83, 99.35], [51.58, 99.78], [51.86, 99.78], [0.28, 99.89], [0.46, 92.42], [3.43, 92.64], [5.19, 92.64], [6.49, 92.32], [8.16, 92.86], [9.65, 93.94], [10.48, 94.59], [12.34, 95.24], [14.84, 95.89], [16.33, 95.45], [17.81, 94.59], [18.74, 94.05], [18.55, 95.24], [19.67, 95.45], [19.67, 96.21], [20.5, 96.21], [20.59, 97.08], [21.52, 97.08], [21.89, 96.43], [26.81, 96.21], [26.81, 97.08], [27.74, 96.97], [27.92, 96.32], [30.06, 96.1], [30.33, 95.02], [30.71, 94.7]],
            'centers': [[36.83, 96.43], [12.62, 96.86]],
            'links': ["1#39#1", "2#39#1"]
        },
        "25": {
            'area': [[21.15, 31.71], [29.04, 31.6], [29.41, 34.09], [33.58, 34.31], [33.86, 41.02], [29.41, 47.19], [21.06, 46.21]],
            'centers': [[24.4, 40.15]],
            'links': [/*"1#38#1", "1#32#1", "1#12#2", "1#51#1", "1#23#1", "1#46#1"*/]
        },
        "26": {
            'area': [[16.42, 69.81], [23.01, 69.59], [23.56, 79.87], [16.79, 82.9], [16.7, 82.36], [16.98, 80.3], [16.88, 78.68], [16.33, 78.57]],
            'centers': [[20.04, 72.08]],
            'links': [/*"1#7#1", "1#42#1", "1#40#1", "1#18#1", "1#41#1"*/]
        },
        "27": {
            'area': [[58.26, 53.46], [63.45, 71.97], [62.15, 72.19], [60.39, 72.84], [59.55, 73.38], [58.26, 74.03], [55.75, 75], [52.97, 75.43], [52.13, 75.22], [53.99, 57.03]],
            'centers': [[57.14, 65.04]],
            'links': [/*"1#20#1", "1#17#1", "1#11#1"*/]
        },
        "28": {
            'area': [[83.77, 19.37], [94.71, 19.37], [94.53, 30.52], [88.03, 30.63], [86.64, 27.06], [85.34, 26.84]],
            'centers': [[90.63, 24.24]],
            'links': [/*"1#31#1", "1#36#1", "1#21#1", "1#48#1", "1#15#1"*/]
        },
        "29": {
            'area': [[33.21, 67.75], [34.42, 67.86], [36.92, 67.53], [46.38, 67.53], [45.73, 80.52], [40.45, 81.39], [39.7, 88.64], [34.42, 88.74], [33.95, 85.93], [32.37, 85.93], [31.82, 81.82], [33.3, 81.6], [33.49, 79.98], [33.77, 78.79]],
            'centers': [[38.78, 74.68]],
            'links': [/*"1#12#1", "1#19#1", "1#33#1", "1#6#1", "1#13#1"*/]
        },
        "30": {
            'area': [[54.17, 25.76], [69.29, 25.11], [68.83, 28.57], [68.18, 32.9], [67.81, 34.52], [67.07, 36.47], [66.7, 37.01], [65.96, 37.23], [64.56, 37.23], [63.17, 37.01], [62.34, 36.04], [61.6, 35.17], [59.18, 34.74], [52.69, 33.23]],
            'centers': [[61.13, 30.09]],
            'links': [/*"1#50#1", "1#2#1"*/]
        },
        "31": {
            'area': [[87.94, 5.74], [95.83, 5.41], [96.29, 8.01], [94.34, 9.74], [94.81, 19.05], [86.83, 18.83], [87.94, 17.64]],
            'centers': [[92.21, 7.14]],
            'links': [/*"1#43#1", "1#28#1", "1#21#1", "1#48#1", "1#15#1"*/]
        },
        "32": {
            'area': [[35.34, 2.27], [39.52, 2.38], [42.49, 20.89], [42.3, 20.89], [42.21, 23.38], [21.24, 23.48], [21.24, 17.32], [20.13, 17.21], [19.11, 18.51], [20.13, 13.42], [20.87, 13.31], [22.17, 11.47]],
            'centers': [[32.19, 15.48]],
            'links': [/*"1#38#1", "1#34#1", "1#12#2", "1#25#1"*/]
        },
        "33": {
            'area': [[36.64, 34.09], [40.72, 34.09], [42.12, 35.28], [42.02, 40.37], [36.73, 41.67]],
            'centers': [[38.31, 34.96]],
            'links': [/*"1#19#1", "1#6#1", "1#29#1", "1#13#1"*/]
        },
        "34": {
            'area': [[39.8, 2.38], [48.98, 2.27], [49.72, 20.45], [42.67, 20.67]],
            'centers': [[44.81, 10.5]],
            'links': [/*"1#38#1", "1#32#1", "1#12#2"*/]
        },
        "35": {
            'area': [[89.24, 97.51], [90.07, 90.15], [96.2, 89.5], [96.2, 95.89], [95.55, 96.75], [94.9, 97.29], [93.23, 97.94], [92.3, 97.73], [91.19, 97.84]],
            'centers': [[93.14, 93.94]],
            'links': [/*"1#8#1", "1#45#1", "1#5#1", "1#4#1"*/]
        },
        "36": {
            'area': [[73.1, 19.7], [73.65, 22.29], [73.93, 24.57], [73.84, 26.19], [73.65, 26.52], [73.75, 28.03], [73.75, 30.09], [73.47, 33.23], [73.01, 35.93], [80.15, 36.15], [80.71, 33.55], [81.35, 32.68], [81.82, 30.74], [82.1, 29.55], [82.93, 28.46], [83.77, 27.06], [84.79, 26.19], [83.49, 19.16], [79.41, 19.37], [78.94, 18.94]],
            'centers': [[78.39, 26.95]],
            'links': [/*"1#1#1", "1#28#1", "1#14#1", "1#3#1", "1#47#1"*/]
        },
        "37": {
            'area': [[6.86, 40.69], [12.34, 38.2], [18, 38.31], [18.09, 50.87], [8.81, 45.24]],
            'centers': [[14.01, 43.94]],
            'links': [/*"1#10#1", "1#16#1", "1#9#1", "1#49#1"*/]
        },
        "38": {
            'area': [[35.34, 1.73], [22.45, 11.36], [22.82, 1.84]],
            'centers': [[26.16, 5.19]],
            'links': [/*"1#32#1", "1#34#1", "1#12#2", "1#25#1", "1#23#1", "1#46#1"*/]
        },
        "39": {
            'area': [[19.02, 94.59], [20.78, 94.37], [21.15, 91.13], [21.43, 91.13], [21.61, 92.42], [27.09, 92.32], [27.27, 90.15], [27.64, 89.94], [27.83, 93.51], [30.8, 93.72], [30.61, 94.7], [28.76, 94.7], [28.76, 95.45], [30.06, 95.35], [30.06, 96.1], [27.74, 96.1], [27.55, 96.86], [27.18, 96.86], [26.9, 95.78], [21.71, 96], [21.71, 96.86], [21.15, 96.75], [20.96, 95.67], [20.22, 95.89], [20.13, 95.35], [19.2, 95.24]],
            'centers': [[24.21, 93.83]],
            'links': [/*"1#7#1",*/ "1#24#1", "1#24#2"]
        },
        "40": {
            'area': [[10.02, 69.7], [16.23, 69.48], [15.96, 78.68], [15.31, 79], [14.56, 80.52], [14.75, 85.93], [9.83, 78.9]],
            'centers': [[13.82, 71.1]],
            'links': [/*"1#7#1", "1#42#1", "1#26#1", "1#18#1", "1#41#1"*/]
        },
        "41": {
            'area': [[3.71, 79.87], [9.55, 79.22], [14.66, 86.58], [14.75, 91.13], [11.32, 90.15], [4.92, 89.5], [4.92, 86.9], [4.36, 86.26], [3.53, 86.15]],
            'centers': [[8.07, 83.55]],
            'links': [/*"1#26#1", "1#40#1", "1#18#1"*/]
        },
        "42": {
            'area': [[23.28, 69.59], [23.84, 80.09], [31.08, 76.73], [30.98, 68.18]],
            'centers': [[27.18, 73.92]],
            'links': [/*"1#7#1", "1#26#1", "1#40#1", "1#18#1"*/]
        },
        "43": {
            'area': [[81.91, 6.28], [87.66, 5.74], [87.57, 15.58], [82, 15.69]],
            'centers': [[84.6, 10.71]],
            'links': [/*"1#31#1"*/]
        },
        "44": {
            'area': [[11.97, 22.84], [18.74, 20.24], [19.11, 34.31], [12.34, 34.31]],
            'centers': [[17.9, 28.57]],
            'links': [/*"1#22#1", "1#10#1"*/]
        },
        "45": {
            'area': [[84.51, 80.09], [95.92, 84.09], [96.29, 89.39], [89.8, 89.83], [88.96, 97.51], [87.11, 96.65], [83.77, 96.21], [82.1, 96.54], [82.56, 81.17]],
            'centers': [[86.73, 88.31]],
            'links': [/*"1#8#1", "1#35#1", "1#5#1", "1#4#1"*/]
        },
        "46": {
            'area': [[21.43, 53.14], [28.11, 54.76], [29.5, 63.96], [21.99, 64.07]],
            'centers': [[25.32, 58.77]],
            'links': [/*"1#38#1", "1#12#2", "1#25#1", "1#51#1", "1#23#1"*/]
        },
        "47": {
            'area': [[69.67, 65.04], [77.74, 68.72], [76.9, 74.35], [74.03, 73.7], [73.38, 73.38], [71.8, 72.84], [71.15, 72.73], [68.74, 72.29], [67.72, 71.97]],
            'centers': [[71.24, 70.56]],
            'links': [/*"1#1#1", "1#36#1", "1#14#1", "1#3#1", "1#8#1"*/]
        },
        "48": {
            'area': [[83.67, 43.18], [89.61, 42.97], [88.5, 54.76], [86.83, 54.87], [86.27, 54.65], [85.34, 54.76], [84.23, 55.3], [82.19, 54.87], [81.63, 54.55], [82, 51.41], [81.91, 50.32], [82.19, 49.03], [82.93, 48.38], [83.21, 47.4], [83.49, 46.43]],
            'centers': [[85.81, 50.76]],
            'links': [/*"1#31#1", "1#28#1", "1#21#1", "1#15#1"*/]
        },
        "49": {
            'area': [[18.65, 53.14], [10.76, 65.58], [18.83, 64.61]],
            'centers': [[16.33, 60.93]],
            'links': [/*"1#10#1", "1#37#1", "1#16#1", "1#9#1"*/]
        },
        "50": {
            'area': [[65.77, 6.71], [61.32, 12.88], [54.73, 16.67], [55.19, 6.28], [59.37, 5.84], [63.08, 5.95]],
            'centers': [[58.72, 9.42]],
            'links': [/*"1#2#1", "1#30#1", "1#1#1"*/]
        },
        "51": {
            'area': [[33.77, 41.77], [29.68, 47.4], [32.75, 55.19], [34.51, 56.39]],
            'centers': [[32, 48.48]],
            'links': [/*"1#12#2", "1#25#1", "1#23#1", "1#46#1"*/]
        }
    }
}