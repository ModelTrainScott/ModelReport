export type PlayerStats = {
  name: string;
  team: string;
  possessions: number;
  points: number;
  assists: number;
  turnovers: number;
  fga: number;
  fta: number;
};

export const players: PlayerStats[] = [
  { name: "Trey Holloway", team: "Duke", possessions: 510, points: 698, assists: 122, turnovers: 58, fga: 482, fta: 190 },
  { name: "Marcus Lee", team: "UConn", possessions: 476, points: 592, assists: 98, turnovers: 62, fga: 451, fta: 128 },
  { name: "Jalen Brooks", team: "Purdue", possessions: 530, points: 671, assists: 86, turnovers: 71, fga: 505, fta: 166 },
  { name: "Ethan Cole", team: "Arizona", possessions: 445, points: 543, assists: 141, turnovers: 49, fga: 382, fta: 148 },
  { name: "Noah Bennett", team: "Kansas", possessions: 392, points: 486, assists: 77, turnovers: 44, fga: 356, fta: 119 },
  { name: "RJ Carter", team: "UNC", possessions: 415, points: 479, assists: 134, turnovers: 65, fga: 334, fta: 176 },
  { name: "Liam Foster", team: "Tennessee", possessions: 448, points: 530, assists: 102, turnovers: 51, fga: 390, fta: 122 },
  { name: "Andre King", team: "Baylor", possessions: 362, points: 410, assists: 90, turnovers: 39, fga: 318, fta: 85 },
  { name: "Mason Reed", team: "Houston", possessions: 501, points: 602, assists: 69, turnovers: 48, fga: 462, fta: 121 },
  { name: "Caleb Price", team: "Gonzaga", possessions: 389, points: 514, assists: 74, turnovers: 42, fga: 339, fta: 160 },
  { name: "Isaiah Ward", team: "Illinois", possessions: 423, points: 505, assists: 111, turnovers: 58, fga: 379, fta: 109 },
  { name: "Dante Rivers", team: "Kentucky", possessions: 378, points: 432, assists: 93, turnovers: 52, fga: 325, fta: 102 }
];
