function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getHealth(cpu, memory) {
  if (cpu > 80 || memory > 80) return "CRITICAL";
  if (cpu > 60) return "WARNING";
  return "HEALTHY";
}

function generateSystems() {
  let systems = [];

  for (let i = 1; i <= 5; i++) {
    let cpu = random(10, 100);
    let memory = random(10, 100);
    let disk = random(10, 100);

    systems.push({
      id: i,
      name: `VM-${i}`,
      cpu,
      memory,
      disk,
      health: getHealth(cpu, memory),
    });
  }

  return systems;
}

module.exports = { generateSystems };
