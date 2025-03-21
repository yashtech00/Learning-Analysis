"use client"

import type React from "react"
import { useState } from "react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  XAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts"
import { X } from "lucide-react"

const initialQuestionAnalysisData = [
  { name: "Correct", value: 10, color: "#4CAF50" },
  { name: "Incorrect", value: 5, color: "#FF5252" },
]

const initialComparisonData = [
  { name: "Your Score", score: 67 },
  { name: "Average", score: 55 },
  { name: "Top Score", score: 85 },
]

export function SkillTest() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rank, setRank] = useState("1")
  const [percentile, setPercentile] = useState("30")
  const [score, setScore] = useState("10")
  const [questionAnalysisData, setQuestionAnalysisData] = useState(initialQuestionAnalysisData)
  const [comparisonData, setComparisonData] = useState(initialComparisonData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const correctAnswers = Number.parseInt(score)
    const totalQuestions = 15
    setQuestionAnalysisData([
      { name: "Correct", value: correctAnswers, color: "#4CAF50" },
      { name: "Incorrect", value: totalQuestions - correctAnswers, color: "#FF5252" },
    ])

    setComparisonData([
      { name: "Your Score", score: (correctAnswers / totalQuestions) * 100 },
      { name: "Average", score: 55 },
      { name: "Top Score", score: 85 },
    ])

    setIsModalOpen(false)
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="mt-14">
        <h1 className="text-2xl font-bold text-gray-800">Skill Test</h1>
        <div className="flex flex-col lg:flex-row mt-4 gap-4">
          <div className="flex-1">
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                    alt="HTML5 Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h2 className="font-bold text-lg">Hyper Text Markup Language</h2>
                    <p className="text-gray-600 text-sm">
                      Questions: 80 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                  </div>
                </div>
                <button
                  className="bg-blue-900 hover:bg-blue-800 transition-colors text-white px-8 py-2 rounded-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Update
                </button>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-4">
              <h2 className="font-bold text-lg mb-4">Quick Statistics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-4 border-r border-gray-200">
                  <div className="rounded-full w-14 h-14 bg-blue-50 flex items-center justify-center">
                    <img
                      src="https://c8.alamy.com/comp/2E919NR/award-cup-vector-icon-trophy-award-cup-gold-prize-champion-win-victory-2E919NR.jpg"
                      alt="Prize"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">{rank}</p>
                    <p className="text-gray-500 text-sm">RANK</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 border-r border-gray-200">
                  <div className="rounded-full w-14 h-14 bg-blue-50 flex items-center justify-center">
                    <img
                      src="https://as2.ftcdn.net/jpg/02/23/37/13/1000_F_223371315_t2hVkYYSayANJ3boFlltVVdIII4l4hHn.jpg"
                      alt="Percentile"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">{percentile}%</p>
                    <p className="text-gray-500 text-sm">PERCENTILE</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="rounded-full w-14 h-14 bg-blue-50 flex items-center justify-center">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/033/294/018/non_2x/fill-green-tick-mark-approved-check-mark-icon-symbols-symbol-for-website-computer-and-mobile-isolated-green-tick-verified-badge-icon-social-media-official-account-tick-symbol-vector.jpg"
                      alt="Correct Answers"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">{score}/15</p>
                    <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-4">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg mb-4">Comparison Graph</h2>
                <img
                  src="https://as2.ftcdn.net/jpg/02/23/37/13/1000_F_223371315_t2hVkYYSayANJ3boFlltVVdIII4l4hHn.jpg"
                  alt="Percentile"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-lg text-gray-700">
                <span className="text-gray-700 font-semibold">You scored {percentile}%</span> which is lower than the
                <span className="ml-1">average percentile 72% of all the engineers who took this assessment</span>
              </span>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis domain={[0, 100]} />

                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#4F46E5"
                      strokeWidth={2}
                      dot={{ fill: "#4F46E5", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[400px] space-y-4">
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <h2 className="font-bold text-lg mb-4">Syllabus</h2>
              <div className="h-72">
                <div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <p>HTML Tools, Forms, History</p>
                      <p className="font-bold text-blue-600">80%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <p>Tags & References in HTML</p>
                      <p className="font-bold text-orange-600">60%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <p>Tables & References in HTML</p>
                      <p className="font-bold text-red-600">24%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "24%" }}></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <p>Tables & CSS Basics</p>
                      <p className="font-bold text-green-600">96%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg mb-4">Question Analysis</h2>
                <p className="font-bold text-xl">{score}/15</p>
              </div>
              <span className="text-gray-700 font-semibold">You scored {score} question out of 15.</span>
              <span className="ml-1">However it still needs some improvements</span>
              <div className="h-48 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={questionAnalysisData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {questionAnalysisData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      formatter={(value) => <span className="text-sm text-gray-600">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Update Scores</h3>
              <div className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                  alt="HTML5 Logo"
                  className="w-12 h-12 object-contain"
                />
              
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="">
                <div className="flex items-center gap-2 mb-2">
                  <p className="w-8 h-8 rounded-full bg-purple-800 flex justify-center items-center text-white text-xs">
                    1
                  </p>
                  <label htmlFor="rank" className="block text-sm font-medium text-gray-900">
                    Update your <span className="font-bold">Rank</span>
                  </label>
                </div>
                <input
                  type="number"
                  id="rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                  required
                />
              </div>
              <div className="">
                <div className="flex items-center gap-2 mb-2">
                  <p className="w-8 h-8 rounded-full bg-purple-800 flex justify-center items-center text-white text-xs">
                    2
                  </p>
                  <label htmlFor="percentile" className="block text-sm font-medium text-gray-900">
                    Update your <span className="font-bold">Percentile</span>
                  </label>
                </div>
                <input
                  type="number"
                  id="percentile"
                  value={percentile}
                  onChange={(e) => setPercentile(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                  required
                />
              </div>
              <div className="">
                <div className="flex items-center gap-2 mb-2">
                  <p className="w-8 h-8 rounded-full bg-purple-800 flex justify-center items-center text-white text-xs">
                    3
                  </p>
                  <label htmlFor="score" className="block text-sm font-medium text-gray-900">
                    Update your <span className="font-bold">current Score (out of 15)</span>
                  </label>
                </div>
                <input
                  type="number"
                  id="score"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                  required
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-5 py-2.5 text-sm font-medium text-blue-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

