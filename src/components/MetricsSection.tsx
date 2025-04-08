import React from "react";

const MetricsSection = () => {
  const barHeights = [30, 50, 80, 110, 140, 155, 160]; // ejemplo de productividad

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Adaptive metrics that <span className="text-gradient">improve over time</span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Pandr analyzes your coding patterns to give personalized suggestions and optimizations.
              The more you use it, the more it adapts to your unique workflow.
            </p>
          </div>

          {/* Chart */}
          <div className="bg-pandr-darkGray/40 border border-pandr-violet/20 rounded-xl p-6 w-full max-w-full overflow-hidden">
            <div className="flex justify-between items-end h-[200px] md:h-[240px]">
              {barHeights.map((h, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  <div
                    className="w-6 md:w-8 rounded-t bg-gradient-to-t from-pandr-accent to-pandr-violet"
                    style={{ height: `${h}px` }}
                  />
                  <span className="text-xs text-gray-400 mt-2">Day {i + 1}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-400">
              <span>Productivity Trend</span>
              <span>Last 7 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;

