import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { MessageSquare, CalendarDays, Bell, BookOpen, CheckCircle2, TrendingUp, Clock, Sparkles, Bot } from "lucide-react";

export default function Dashboard() {
  const { t } = useLanguage();

  // --- إعدادات الشات التفاعلي الجديد ---
  const [messages, setMessages] = React.useState<Array<{ role: 'user' | 'model', text: string }>>([
    { role: 'model', text: 'مرحباً بك في Suly AI! كيف يمكنني مساعدتك في دراستك اليوم؟' }
  ]);
  const [inputMessage, setInputMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userText = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      // استيراد الخدمة ديناميكياً لتجنب المشاكل أثناء التشغيل الأولي قبل ربط المفتاح
      const { askSulyAI } = await import("../services/gemini");
      const aiResponse = await askSulyAI(userText);
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'عذراً، حدث خطأ في الاتصال بالذكاء الاصطناعي.' }]);
    } finally {
      setIsLoading(false);
    }
  };
  // ------------------------------------

  return (
    <section className="relative py-24 overflow-hidden">
      {/* الخلفية المضيئة الملونة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العناوين الرئيسية */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.dashboardTitle}</h2>
          <p className="text-lg text-slate-400">{t.dashboardSubtitle}</p>
        </div>

        {/* لوحة التحكم الزجاجية Glassmorphism */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-60" />

          <div className="relative bg-[#0f172a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            {/* الهيدر العلوي للوحة التحكم */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Bell className="w-5 h-5" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
              </div>
            </div>

            {/* شبكة الكروت (Dashboard Grid) */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* 1. كارت الـ GPA ومخطط البيانات */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-400">{t.dashboardGpa}</span>
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-4xl font-extrabold text-white mb-2">3.85</div>
                <div className="text-sm text-emerald-400">+0.15 this semester</div>
                <div className="mt-4 h-16 flex items-end gap-1">
                  {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500/60 to-cyan-400/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* 2. كارت المهام اليومية (Today's Tasks) */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-400">{t.dashboardTasks}</span>
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="space-y-3">
                  {[
                    { task: "Calculus HW", done: true, time: "2h" },
                    { task: "CS Lab Report", done: false, time: "3h" },
                    { task: "Physics Reading", done: false, time: "1.5h" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.done ? "border-emerald-400 bg-emerald-400/20" : "border-slate-600"}`}>
                        {item.done && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm ${item.done ? "text-slate-500 line-through" : "text-white"}`}>{item.task}</div>
                      </div>
                      <span className="text-xs text-slate-500">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. كارت الشات الفعلي والذكي (AI Chat Component) */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col justify-between h-[250px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-400">{t.dashboardChat}</span>
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                </div>
                
                {/* منطقة عرض الرسائل مع شريط تمرير مخفي */}
                <div className="space-y-3 flex-1 overflow-y-auto pr-1 max-h-[140px] scrollbar-none text-right">
                  {messages.map((notif, i) => (
                    <div key={i} className={`flex items-start gap-2 ${notif.role === "user" ? "flex-row-reverse" : ""}`}>
                      {notif.role === "model" && (
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className={`rounded-xl px-3 py-2 text-xs text-slate-300 max-w-[85%] ${
                        notif.role === "user" ? "bg-cyan-500/20 rounded-tr-none text-left" : "bg-white/5 rounded-tl-none"
                      }`}>
                        {notif.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="text-xs text-slate-500 animate-pulse flex items-center gap-1 justify-start">
                      <Sparkles className="w-3 h-3 animate-spin text-purple-400" /> جاري التفكير...
                    </div>
                  )}
                </div>

                {/* حقل الإدخال وزر الإرسال */}
                <form onSubmit={handleSendMessage} className="mt-3 flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="اسأل Suly AI..."
                    disabled={isLoading}
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition disabled:opacity-50 flex items-center justify-center"
                  >
                    إرسال
                  </button>
                </form>
              </div>

              {/* 4. كارت جدول المحاضرات (Schedule) */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-400">{t.dashboardSchedule}</span>
                  <CalendarDays className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-2">
                  {[
                    { time: "09:00", course: "Calculus II", room: "H-101" },
                    { time: "11:00", course: "Data Structures", room: "L-203" },
                    { time: "14:00", course: "Physics Lab", room: "P-05" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </div>
                      <div className="flex-1 text-sm text-white">{item.course}</div>
                      <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded">{item.room}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. كارت نسب تقدم الكورسات (Courses Progress) */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-400">{t.dashboardCourses}</span>
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Calculus II", progress: 78, color: "from-blue-500 to-cyan-400" },
                    { name: "Data Structures", progress: 65, color: "from-purple-500 to-pink-400" },
                    { name: "Physics", progress: 92, color: "from-emerald-500 to-teal-400" },
                  ].map((course, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-white">{course.name}</span>
                        <span className="text-xs text-slate-400">{course.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full bg-gradient-to-r ${course.color} transition-all`} style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. كارت التنبيهات والإشعارات (Notifications) */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-400">{t.dashboardNotifications}</span>
                  <Bell className="w-5 h-5 text-rose-400" />
                </div>
                <div className="space-y-3">
                  {[
                    { text: "Quiz tomorrow: Calculus", urgent: true },
                    { text: "Assignment due in 2 days", urgent: false },
                    { text: "New study material available", urgent: false },
                  ].map((notif, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${notif.urgent ? "bg-rose-400" : "bg-slate-600"}`} />
                      <span className={`text-sm ${notif.urgent ? "text-rose-300" : "text-slate-400"}`}>{notif.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}