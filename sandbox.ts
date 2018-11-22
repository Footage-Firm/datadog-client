import datadog from "./datadog";

main().catch(err => {
  console.error(err);
});

async function main() {
  const res = await datadog.getMetrics();
  console.log(res);
}
