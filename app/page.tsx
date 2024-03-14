import { Text } from "@/components/Text";

const pageText = { main: "اللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدنَا مُحَمَّدٍ الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ وَتَنْفَرِجُ بِهِ الْكُرَبُ وَتُقْضَى بِهِ الْحَوائِجُ وتُنَالُ بِهِ الرَّغَائِبُ وَحُسْنُ الْخَوَاتِيمُ وَيُسْتَسْقَى الْغَمَامُ بِوَجْهِهِ الْكَرِيمُ وَعَلَى آلِهِ وَصَحْبِهِ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ بِعَدَدِ كُلِّ مَعْلُومٍ لَكَ (يَا حَيُّ يَا قَيُّوم).", trans: "Allahumma salli salatan kamilatan wa sallim salaman tamman ‘ala sayyidina muhammadin alladhi tanhallu bihi al-’uqad wa tanfariju bihi al-kurab wa tuqda bihi al-hawa’ij wa tanalu bihi ar-ragha’ib wa husnu al-khawatim, wa ustasqa al-ghamamu bi wajhihi al-karim wa ‘ala alihi wa sahbihi fi kulli lamhatin wa nafasin bi ‘adadi kulli ma’lumin laka (ya hayyu ya qayyum)" };

export default async function Page() {

  return (
    <div>
      <div className="flex flex-col bg-slate-800 h-[calc(100vh-32px)] p-2">
        <div className="flex h-full place-content-center">
          <div className="flex flex-col w-[300px] largemobile:w-[22rem] desktop:w-[300px] p-5 items-center justify-center">
            <div className="text-white text-xl text-center pb-[15px]">
              As-Salah an-Nariyyah: The Fiery Prayer
            </div>
            <Text
              text={pageText}
              totalPages={1}
              path={"/"}
              translation="trans"
              currentPage={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

