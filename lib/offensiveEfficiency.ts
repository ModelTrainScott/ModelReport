import type { PlayerStats } from "../data/players";

export type RankedPlayer = PlayerStats & {
  pointsPerPossession: number;
  trueShooting: number;
  assistTurnoverRatio: number;
  offensiveEfficiencyScore: number;
};

const round = (value: number, digits = 3) => Number(value.toFixed(digits));

export function rankPlayersByOffense(stats: PlayerStats[], minPossessions: number): RankedPlayer[] {
  return stats
    .filter((player) => player.possessions >= minPossessions)
    .map((player) => {
      const pointsPerPossession = player.points / player.possessions;
      const trueShooting = player.points / (2 * (player.fga + 0.44 * player.fta));
      const assistTurnoverRatio = player.turnovers === 0 ? player.assists : player.assists / player.turnovers;

      const normalizedAstTo = Math.min(assistTurnoverRatio / 4, 1);
      const score = pointsPerPossession * 70 + trueShooting * 20 + normalizedAstTo * 10;

      return {
        ...player,
        pointsPerPossession: round(pointsPerPossession),
        trueShooting: round(trueShooting),
        assistTurnoverRatio: round(assistTurnoverRatio),
        offensiveEfficiencyScore: round(score, 2)
      };
    })
    .sort((a, b) => b.offensiveEfficiencyScore - a.offensiveEfficiencyScore);
}
