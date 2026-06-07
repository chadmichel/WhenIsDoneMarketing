import { ArrowUpRight, CheckCircle2, FolderGit2, Workflow } from 'lucide-react'
import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card'

const features = [
  {
    icon: FolderGit2,
    title: 'Model your project',
    description:
      'Design your repository workflow visually and keep every issue, branch, and release aligned.',
  },
  {
    icon: Workflow,
    title: 'Move work forward',
    description:
      'Turn planning into execution with a clean workflow that feels native to how GitHub teams ship.',
  },
  {
    icon: CheckCircle2,
    title: 'Know when it is done',
    description:
      'Track completion signals across tasks so your team can confidently deliver on schedule.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <header className="border-b border-[#30363d]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold text-white">WhenIsDone</p>
          <a
            className="text-sm text-[#7d8590] transition hover:text-[#58a6ff]"
            href="https://github.whenisdone.com"
            target="_blank"
            rel="noreferrer"
          >
            github.whenisdone.com
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20">
        <section className="space-y-6">
          <p className="inline-flex rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1 text-xs text-[#7d8590]">
            The WhenIsDone Series
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Design GitHub projects with clarity.
          </h1>
          <p className="max-w-3xl text-lg text-[#8b949e]">
            github.whenisdone.com helps product and engineering teams shape work from idea to done.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://github.whenisdone.com" target="_blank" rel="noreferrer">
                Open App <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#features">Explore features</a>
            </Button>
          </div>
        </section>

        <section id="features" className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="mb-2 w-fit rounded-md border border-[#30363d] bg-[#0d1117] p-2">
                    <Icon className="size-4 text-[#58a6ff]" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#7d8590]">Built to feel at home for GitHub-first teams.</p>
                </CardContent>
              </Card>
            )
          })}
        </section>
      </main>
    </div>
  )
}

export default App
