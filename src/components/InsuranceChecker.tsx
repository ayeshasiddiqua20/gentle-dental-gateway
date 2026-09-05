import { useState } from "react";

const PROVIDERS: Record<string, string> = {
  "Delta Dental": "In-network. Cleanings and exams are typically covered at 100%, fillings at 80%.",
  Cigna: "In-network. Preventive care covered at 100%, major work at 50% after deductible.",
  Aetna: "In-network. Two cleanings a year covered, crowns and implants partially covered.",
  MetLife: "In-network. Exams and X-rays covered, orthodontics with lifetime maximum.",
  UnitedHealthcare: "In-network. Preventive covered in full, restorative at 70–80%.",
  "Guardian": "Out-of-network, but we file your claim for you and most patients are reimbursed.",
  "Other / not sure": "Send us your card and we'll verify your benefits before your visit — free.",
};

export function InsuranceChecker() {
  const [provider, setProvider] = useState("");

  return (
    <div className="max-w-md">
      <label
        htmlFor="insurance-provider"
        className="mb-2 block text-xs tracking-[0.14em] text-cream/50 uppercase"
      >
        Select your insurance provider
      </label>
      <select
        id="insurance-provider"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        className="w-full appearance-none rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm text-cream focus:ring-2 focus:ring-gold focus:outline-none"
      >
        <option value="" className="text-teal-dark">
          Choose a provider…
        </option>
        {Object.keys(PROVIDERS).map((name) => (
          <option key={name} value={name} className="text-teal-dark">
            {name}
          </option>
        ))}
      </select>

      {provider ? (
        <p className="mt-4 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-cream/90">
          {PROVIDERS[provider]}
        </p>
      ) : null}
    </div>
  );
}
