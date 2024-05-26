export function ZodErrors({ error }: { error: string[] }) {

    if (!error) return null;

    return error.map((err: string, index: number) => (

      <div key={index} className="text-red-800 font-bold mt-2">
        {err}
      </div>

    ));
  }