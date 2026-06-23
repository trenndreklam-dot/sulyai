import React, { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { MessageSquare, Bell, Sparkles, Bot, Paperclip, FileText, X } from "lucide-react";

export default function Dashboard() {
  const { t } = useLanguage();

  // --- إعدادات الشات التفاعلي المطور للدراسة ---
  const [messages, setMessages] = React.useState<Array<{ role: 'user' | 'model', text: string }>>([
    { 
      role: 'model', 
      text: 'مرحباً بك في Suly AI للدراسة فقط! 📚 أنا مساعدك الأكاديمي المخصص للمناهج والملخصات، ومبرمج على رفض الإجابة عن أي موضوع خارج نطاق الدراسة. كيف يمكنني مساعدتك في موادك اليوم؟' 
    }
  ]);
  const [inputMessage, setInputMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!inputMessage.trim() && !selectedFile) || isLoading) return;

    // صياغة نص الرسالة مع الملف إذا وُجد
    const fileLabel = selectedFile ? ` [📄 ملف مرفق: ${selectedFile.name}]` : "";
    const userText = inputMessage + fileLabel;
    
    setInputMessage('');
    setSelectedFile(null);
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      // توجيه صارم للـ API لحصر الإجابة في بيئة الدراسة فقط
      const strictPrompt = `(تعليمات النظام: أنت مساعد دراسي مخصص حصراً للتعليم والمناهج. إذا كان السؤال التالي لا يتعلق بالدراسة، أو العلوم، أو المناهج التعليمية، فاعتذر فوراً وارفض الإجابة بلطف واذكر للمستخدم أنك مخصص للدراسة فقط). السؤال أو الملف المرسل: ${userText}`;

      const { askSulyAI } = await import("../services/gemini");
      const aiResponse = await askSulyAI(strictPrompt);
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'عذراً، حدث خطأ أثناء الاتصال بالخادم الدراسي.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  // ------------------------------------

  return (
    <section className="relative min-h-[85vh] py-12 overflow-hidden flex items-center justify-center">
      {/* الخلفية المضيئة الملونة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-[160px]" />

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6">
        {/* العناوين الرئيسية المرتكزة */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">البيئة الدراسية الذكية | Suly AI</h2>
          <p className="text-sm text-slate-400">منصة دردشة عملاقة مخصصة لتحليل الملفات وحل الواجبات الأكاديمية</p>
        </div>

        {/* لوحة الشات العملاقة الموحدة */}
        <div className="relative w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-70" />

          <div className="relative bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[65vh]">
            
            {/* الهيدر العلوي للوحة التحكم */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-900/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="text-xs font-semibold text-purple-400 mr-2 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                  وضع التركيز الدراسي الحصري
                </span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Bell className="w-5 h-5 cursor-pointer hover:text-white transition" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 shadow-md" />
              </div>
            </div>

            {/* منطقة المحادثة الكبيرة جداً */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-950/40">
              {messages.map((notif, i) => (
                <div key={i} className={`flex items-start gap-3 ${notif.role === "user" ? "flex-row-reverse" : ""}`}>
                  {notif.role === "model" && (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-900/30">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`rounded-2xl px-4 py-3 text-sm text-slate-200 max-w-[80%] leading-relaxed shadow-sm ${
                    notif.role === "user" 
                      ? "bg-purple-600 text-white rounded-tr-none ml-auto text-right" 
                      : "bg-slate-900 border border-white/5 rounded-tl-none text-right"
                  }`}>
                    {notif.text}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="text-xs text-slate-400 animate-pulse flex items-center gap-2 justify-start bg-slate-900/40 w-fit px-3 py-2 rounded-xl border border-white/5">
                  <Sparkles className="w-3 h-3 animate-spin text-purple-400" /> جاري تحليل المعطيات الدراسية...
                </div>
              )}
            </div>

            {/* شريط استعراض الملف المختار قبل الإرسال */}
            {selectedFile && (
              <div className="px-6 py-2 bg-purple-950/30 border-t border-purple-500/20 flex items-center justify-between text-xs text-purple-300 animate-fade-in">
                <span className="flex items-center gap-1.5 font-medium">
                  <FileText className="w-3.5 h-3.5 text-purple-400" /> ملف جاهز للرفع: {selectedFile.name}
                </span>
                <button 
                  type="button" 
                  onClick={() => setSelectedFile(null)} 
                  className="p-1 hover:bg-white/5 rounded-full text-rose-400 transition"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* حقل الإدخال العريض المطور وأزرار الرفع */}
            <form onSubmit={handleSendMessage} className="p-4 bg-slate-900/60 border-t border-white/10 flex items-center gap-3">
              {/* مدخل الملفات المخفي */}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept=".pdf,.docx,.txt" 
                className="hidden" 
              />
              
              {/* زر رفع الملفات (مشبك ورق) */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-white/5 transition disabled:opacity-50 flex items-center justify-center shadow-inner"
                title="إرفاق ملف دراسي (PDF, DOCX, TXT)"
              >
                <Paperclip className="w-5 h-5" />
              </button>

              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="اكتب سؤالك التعليمي، أو ارفع ملف الملخص هنا..."
                disabled={isLoading}
                className="flex-1 bg-slate-800/80 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:opacity-50 transition text-right"
              />
              
              <button
                type="submit"
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-6 py-3 rounded-xl text-sm transition disabled:opacity-50 shadow-lg shadow-purple-700/20 flex items-center justify-center gap-1"
              >
                <MessageSquare className="w-4 h-4" />
                إرسال
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}