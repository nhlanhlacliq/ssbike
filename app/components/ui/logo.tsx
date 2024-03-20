import { cn } from "~/lib/utils"

type Props = {
  className?: string
}

const Logo = ({className}: Props) => {
  return (
    <div className={cn("-skew-y-3 rotate-3 scale-75 origin-left flex items-center",className)}>
      <span className="text-5xl font-black tracking-tighter" >
        <span className="-tracking-widest">
          ST
        </span>
        UDIO
      </span>
      <span className='ml-0.5 bg-primary dark:bg-accent-foreground font-bold text-secondary [writing-mode:vertical-lr] text-xs lowercase rotate-180' >
        Street
      </span>
    </div>
  )
}

export default Logo