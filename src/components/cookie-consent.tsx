"use client"
import { useState, useEffect } from "react"
import { setCookie, getCookie } from "cookies-next"
import Link from "next/link"
import { X, Settings, ChevronDown, ChevronUp } from "lucide-react"

type CookiePreferences = {
  essential: boolean
  analytics: boolean
  functional: boolean
  marketing: boolean
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: true,
  functional: true,
  marketing: true,
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  useEffect(() => {
    const consent = getCookie("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    } else {
      try {
        const saved = JSON.parse(consent as string)
        setPreferences(saved)
      } catch {
        setShowBanner(true)
      }
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    setCookie("cookie-consent", JSON.stringify(prefs), { maxAge: 60 * 60 * 24 * 365 })
    setPreferences(prefs)
    setShowBanner(false)
    setShowPreferences(false)
    window.location.reload()
  }

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    })
  }

  const declineAll = () => {
    savePreferences({
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    })
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  const toggleCategory = (category: keyof CookiePreferences) => {
    if (category === "essential") return
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  if (!showBanner && !showPreferences) return null

  const categories = [
    {
      id: "essential" as const,
      name: "Strictly Essential",
      description: "Required for the website to function. Cannot be disabled.",
      details: [
        "Session management",
        "Security tokens (CSRF protection)",
        "Cookie consent preferences",
        "Load balancing",
      ],
      required: true,
    },
    {
      id: "analytics" as const,
      name: "Analytics & Performance",
      description: "Help us understand how visitors use our site.",
      details: [
        "Google Analytics (traffic, page views)",
        "Microsoft Clarity (heatmaps, session recordings)",
        "Vercel Analytics (performance metrics)",
      ],
      required: false,
    },
    {
      id: "functional" as const,
      name: "Functional",
      description: "Remember your preferences and settings.",
      details: [
        "Theme preferences (light/dark mode)",
        "Language settings",
        "UI customizations",
      ],
      required: false,
    },
    {
      id: "marketing" as const,
      name: "Marketing & Advertising",
      description: "Used to deliver relevant ads and track campaigns.",
      details: [
        "Currently not in use",
        "Would include: Facebook Pixel, Google Ads, LinkedIn",
      ],
      required: false,
    },
  ]

  return (
    <>
      {showBanner && !showPreferences && (
        <div className="fixed bottom-4 left-4 right-4 md:right-auto z-50 max-w-md bg-white border border-slate-200 rounded-xl shadow-lg p-6 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🍪</span>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">We value your privacy</h3>
              <p className="text-sm text-slate-600 mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
              
              <button
                onClick={acceptAll}
                className="w-full px-4 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-3"
              >
                Accept All Cookies
              </button>
              
              <div className="flex items-center justify-center gap-4 text-sm">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="text-slate-500 hover:text-slate-900 underline-offset-2 hover:underline transition-colors flex items-center gap-1"
                >
                  <Settings className="w-3.5 h-3.5" />
                  Manage preferences
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={declineAll}
                  className="text-slate-500 hover:text-slate-900 underline-offset-2 hover:underline transition-colors"
                >
                  Decline all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Cookie Preferences</h2>
                <p className="text-sm text-slate-500 mt-1">Customize your cookie settings below</p>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[50vh] space-y-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="border border-slate-200 rounded-lg overflow-hidden"
                >
                  <div className="flex items-center justify-between p-4 bg-slate-50">
                    <div className="flex-1">
                      <button
                        onClick={() => setExpandedCategory(
                          expandedCategory === category.id ? null : category.id
                        )}
                        className="flex items-center gap-2 font-medium text-slate-900 hover:text-blue-600"
                      >
                        {expandedCategory === category.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                        {category.name}
                        {category.required && (
                          <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded">
                            Always on
                          </span>
                        )}
                      </button>
                      <p className="text-sm text-slate-500 mt-1 ml-6">
                        {category.description}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences[category.id]}
                        onChange={() => toggleCategory(category.id)}
                        disabled={category.required}
                        className="sr-only peer"
                      />
                      <div className={`w-11 h-6 rounded-full peer 
                        ${category.required 
                          ? "bg-blue-600 cursor-not-allowed" 
                          : "bg-slate-200 peer-checked:bg-blue-600"
                        }
                        peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                        after:bg-white after:rounded-full after:h-5 after:w-5 
                        after:transition-all peer-checked:after:translate-x-full`}
                      />
                    </label>
                  </div>

                  {expandedCategory === category.id && (
                    <div className="p-4 border-t border-slate-200 bg-white">
                      <p className="text-sm font-medium text-slate-700 mb-2">This includes:</p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {category.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-6 border-t border-slate-200 bg-slate-50">
              <button
                onClick={declineAll}
                className="text-sm text-slate-500 hover:text-slate-900 underline-offset-2 hover:underline transition-colors"
              >
                Decline all
              </button>
              <div className="flex items-center gap-4">
                <button
                  onClick={acceptAll}
                  className="text-sm text-slate-500 hover:text-slate-900 underline-offset-2 hover:underline transition-colors"
                >
                  Accept all
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="px-5 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
