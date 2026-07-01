import { CheckCircle } from "lucide-react";

export default function ReviewCard() {
  return (
    <section className="flex justify-between gap-3 border text-black rounded-xl p-6 mt-6">
        <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center text-base">
            AR
        </div>
        <div className="flex-1">

          <div className="w-fit ">

            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-base">
                Alex Rivera
              </h3>

              <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm">
                <CheckCircle size={14} />
                Verified Buyer
              </div>
            </div>

            <p className="text-xs text-gray-500">
              Structural Engineer
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-yellow-500">
                ★★★★★
              </span>

              <span>5.0</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 leading-7">
                Excellent project! The real-time monitoring dashboard
                is very intuitive and useful for bridge health analysis.
            </p>

          </div>

        </div>

        <span className="text-sm text-gray-500">
          2 days ago
        </span>
    </section>
  );
}