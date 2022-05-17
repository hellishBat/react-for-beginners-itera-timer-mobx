// Display
const Display = ({ counter }: { counter: number }) => {
  return (
    <h2 className="col-span-5 px-8 py-4 pb-5 rounded-md bg-white text-5xl font-bold text-center leading-none text-black/70">
      {new Date(counter * 1000).toISOString().slice(11, 19)}
    </h2>
  )
}

export default Display
