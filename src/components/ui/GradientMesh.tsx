export function GradientMesh() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#3b82f6] opacity-[0.07] blur-[120px] animate-mesh-1" />
      <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#8b5cf6] opacity-[0.06] blur-[120px] animate-mesh-2" />
      <div className="absolute -bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full bg-[#6366f1] opacity-[0.05] blur-[120px] animate-mesh-3" />
    </div>
  );
}
