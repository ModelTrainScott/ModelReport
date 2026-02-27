import { useMemo, useState } from "react";
import { players } from "../data/players";
import { rankPlayersByOffense } from "../lib/offensiveEfficiency";

export default function Home() {
  const [minPossessions, setMinPossessions] = useState(350);

  const rankedPlayers = useMemo(
    () => rankPlayersByOffense(players, minPossessions),
    [minPossessions]
  );

  return (
    <main className="container">
      <h1>College Basketball Offensive Efficiency Rankings</h1>
      <p className="subtitle">
        Rankings are computed from points per possession, true shooting percentage, and assist-to-turnover ratio.
      </p>

      <section className="controls">
        <label htmlFor="minPossessions">
          Minimum possessions: <strong>{minPossessions}</strong>
        </label>
        <input
          id="minPossessions"
          type="range"
          min={300}
          max={550}
          step={10}
          value={minPossessions}
          onChange={(event) => setMinPossessions(Number(event.target.value))}
        />
      </section>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Team</th>
            <th>PPP</th>
            <th>TS%</th>
            <th>AST/TO</th>
            <th>Efficiency Score</th>
          </tr>
        </thead>
        <tbody>
          {rankedPlayers.map((player, index) => (
            <tr key={player.name}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.pointsPerPossession}</td>
              <td>{player.trueShooting}</td>
              <td>{player.assistTurnoverRatio}</td>
              <td>{player.offensiveEfficiencyScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
