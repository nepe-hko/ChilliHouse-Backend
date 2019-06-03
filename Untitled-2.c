int main(void)
{
    int i = 0;
    double x, xalt = 10.0, xneu;
    double rel_fehler = 1.0;
    printf("Wurzel berechnen von: ");
    scanf("%lf", &x);
    while(i <= 50 && rel_fehler > 1e-6) {
        ++i;
        xneu = .5 * (xalt + x / xalt);
        rel_fehler = (xneu - xalt) / xneu;
        if(rel_fehler < 0) {
            rel_fehler = -rel_fehler;
        }
            xalt = xneu;
    }
    printf("Ergebnis ist: %.10f (nach %d Iterationen)\n", xneu, i);
    printf("Exakter Wert: %.10f\n", sqrt(x));
    return 0;
}