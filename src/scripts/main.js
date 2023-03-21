const dataDeAniversario = new Date("Jun 25, 2023 15:00:00");
const timeStampDoEvento = dataDeAniversario.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diasEmMs) / horasEmMs
  );
  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % horasEmMs) / minutoEmMs
  );
  const segundosAteOEvento = Math.floor(
    (distanciaAteOEvento % minutoEmMs) / 1000
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = `Evento expirado`;
  }
}, 1000);
