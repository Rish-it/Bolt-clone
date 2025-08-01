"use client"

import { useState } from "react"
import {
  Paperclip,
  ImageIcon,
  Github,
  Figma,
  Zap,
  Code,
  Database,
  Globe,
  Smartphone,
  CreditCard,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [prompt, setPrompt] = useState("")

  const templates = [
    { icon: CreditCard, text: "Create a financial app", category: "Finance" },
    { icon: Globe, text: "Design a directory website", category: "Directory" },
    { icon: Code, text: "Build a project management app", category: "Productivity" },
    { icon: FileText, text: "Make a landing page", category: "Marketing" },
    { icon: Database, text: "Generate a CRM", category: "Business" },
    { icon: Smartphone, text: "Build a mobile app", category: "Mobile" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="backdrop-blur-xl bg-white/80 border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gray-900 rounded-xl shadow-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">bolt</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Community
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Enterprise
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Resources
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Pricing
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm border border-gray-200/50">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100/50"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100/50"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100/50"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                  </svg>
                </a>
              </div>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 rounded-xl px-4 py-2 font-medium">
                Sign In
              </Button>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">What do you want to build?</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Create stunning apps & websites by chatting with AI.
          </p>

          {/* Prompt Input */}
          <div className="relative mb-12">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-2">
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your idea and we'll bring it to life (or /command)"
                className="min-h-[140px] text-lg p-6 border-0 bg-transparent resize-none rounded-2xl focus:ring-0 focus:outline-none placeholder:text-gray-400"
              />
              <div className="flex justify-between items-center px-4 pb-2">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-600 p-3 rounded-2xl hover:bg-gray-100/50 transition-all duration-200 hover:scale-110"
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-600 p-3 rounded-2xl hover:bg-gray-100/50 transition-all duration-200 hover:scale-110"
                  >
                    <ImageIcon className="h-5 w-5" />
                  </Button>
                </div>
                <Button
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-2xl px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  disabled={!prompt.trim()}
                >
                  Generate
                </Button>
              </div>
            </div>
          </div>

          {/* Import Options */}
          <div className="mb-16">
            <p className="text-gray-500 mb-6 font-medium">or import from</p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                className="flex items-center space-x-3 border-gray-200/50 hover:border-gray-300 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <Figma className="h-5 w-5 text-gray-600" />
                <span className="font-medium">Figma</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-3 border-gray-200/50 hover:border-gray-300 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <Github className="h-5 w-5 text-gray-600" />
                <span className="font-medium">GitHub</span>
              </Button>
            </div>
          </div>

          {/* Template Suggestions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => {
              const Icon = template.icon
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center space-y-4 border-gray-200/50 hover:border-gray-300 hover:bg-white/80 transition-all duration-200 bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-lg hover:scale-105 group"
                >
                  <div className="p-4 bg-gray-100/50 rounded-2xl group-hover:bg-gray-200/50 transition-colors duration-200">
                    <Icon className="h-7 w-7 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-semibold text-gray-900 block mb-2">{template.text}</span>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-100/80 text-gray-600 rounded-xl px-3 py-1 font-medium"
                    >
                      {template.category}
                    </Badge>
                  </div>
                </Button>
              )
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200/50 bg-white/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors font-medium">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors font-medium">
              Blog
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors font-medium">
              Documentation
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors font-medium">
              Help Center
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors font-medium">
              Careers
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors font-medium">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors font-medium">
              Privacy
            </a>
            <div className="flex items-center space-x-2 text-gray-500">
              <Zap className="h-4 w-4" />
              <span className="font-medium">StackBlitz</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
