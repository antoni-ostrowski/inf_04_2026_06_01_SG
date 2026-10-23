char[] lowers = "abcdefghijklmnopqrstuvwxyz".ToCharArray();
char[] uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();
char[] digits = "0123456789".ToCharArray();
char[] symbols = "!@#$%^&*()_+".ToCharArray();
char[] polish = "ąęłńóśżźĄĘŁŃÓŚŻŹ".ToCharArray();


string password = gen();
Console.WriteLine(password);

string gen()
{
    string result = "";

		result += getRand(3, lowers);
		result += getRand(3, uppers);
		result += getRand(2, symbols);
		result += getRand(2, polish);
		result += getRand(2, digits);

		char[] resArr = result.ToArray();

    Random.Shared.Shuffle(resArr);

    return string.Join("", resArr);
}
string getRand(int count, char[] arr)
{
    string result = "";

    for (int i = 0; i < count; i++)
    {
        int r = Random.Shared.Next(0, arr.Length);
				result += arr[r];
    }

    return result;
}

