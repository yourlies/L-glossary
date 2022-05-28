const sleep = () => {
  return new Promise(resolve => setTimeout(() => { resolve(1) }, 2000))
}

export default async () => {
  await sleep()
  return 123
}