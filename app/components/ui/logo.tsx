const Logo = () => {
  return (
    <div className="-skew-y-3 rotate-3 scale-75 origin-left flex items-center">
      <span className="text-5xl font-black uppercase tracking-tighter" >
        <span className="-tracking-widest">
          St
        </span>
        udio
      </span>
      <span className='ml-0.5 bg-primary font-bold text-secondary [writing-mode:vertical-lr] text-xs lowercase rotate-180' >
        Street
      </span>
    </div>
  )
}

export default Logo