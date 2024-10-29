/*****************************************************
 * @file   main.c                                    *
 * @author Paterakis Giorgos <geopat@csd.uoc.gr>     *
 *                                                   *
 * @brief Main Function for Data Structures (CS240b) *
 * Project: Winter 2023						         *
 *****************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>

#include "Movie.h"

#define BUFFER_SIZE 1024  /**< Maximum length of a line in input file */

/* Uncomment the following line to enable debugging prints 
 * or comment to disable it */
#define DEBUG

#ifdef DEBUG
#define DPRINT(...) fprintf(stderr, __VA_ARGS__);
#else  /* DEBUG */
#define DPRINT(...)
#endif /* DEBUG */

int hashtable_size; 	/** The size of the users hashtable (>0) */
int max_users;         /** The maximum number of registrations (users) */
int max_id;            /** The maximum user ID */

// This is a very conservative progress on the hashtable. Our purpose
// is to force many rehashes to check the stability of the code.
int primes_g[170] = 		{  5,   7,  11,  13,  17,  19,  23,  29,  31,  37,
                               41,  43,  47,  53,  59,  61,  67,  71,  73,  79,
                               83,  89,  97, 101, 103, 107, 109, 113, 127, 131,
                              137, 139, 149, 151, 157, 163, 167, 173, 179, 181,
                              191, 193, 197, 199, 211, 223, 227, 229, 233, 239,
                              241, 251, 257, 263, 269, 271, 277, 281, 283, 293,
                              307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
                              367, 373, 379, 383, 389, 397, 401, 409, 419, 421,  
                              431, 433, 439, 443, 449, 457, 461, 463, 467, 479,
                              487, 491, 499, 503, 509, 521, 523, 541, 547, 557,
                              563, 569, 571, 577, 587, 593, 599, 601, 607, 613,
                              617, 619, 631, 641, 643, 647, 653, 659, 661, 673,
                              677, 683, 691, 701, 709, 719, 727, 733, 739, 743,
                              751, 757, 761, 769, 773, 787, 797, 809, 811, 821,
                              823, 827, 829, 839, 853, 857, 859, 863, 877, 881,
                              883, 887, 907, 911, 919, 929, 937, 941, 947, 953,
                          	  967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021 };

user_t **user_hashtable_p;	/* The users hashtable. This is an array of chains (pinakas katakermatismoy xrhstwn)*/
new_movie_t *new_releases;     /* New releases simply-linked binary tree*/
movieCategory_t *categoryArray[6];  /* The categories array (pinakas kathgoriwn)*/

void initializeHashTable(int hashtable_size) {
    user_hashtable_p = malloc(sizeof(user_t*) * hashtable_size);
    if (user_hashtable_p == NULL) {
        exit(EXIT_FAILURE);
    }
    for (int i = 0; i < hashtable_size; i++) {
        user_hashtable_p[i] = NULL;
    }
}

int register_user(int userID){
	if (user_hashtable_p == NULL) {
		if(max_users%2==0){//kanw to megethos oso einai oi users kai an einai zygos prosthetw 1
			hashtable_size=max_users+1;
		}else{
			hashtable_size=max_users;
		}
        initializeHashTable(hashtable_size);
    }
	int primeindex=0;
	int prime = primes_g[primeindex];
	int index = userID % hashtable_size;
	while (index % prime == 0){
		prime = primes_g[++primeindex];
		index = (userID + prime) % hashtable_size; //vriskw to hash key symfwna me ton typo (ax+b)modp
	}
	user_t* newUser = (user_t*)malloc(sizeof(user_t));//ftiaxnw neo user
	if (newUser == NULL) {
        exit(EXIT_FAILURE);
    }
	newUser->userID = userID;//pernaw mono to id tou
    newUser->history = NULL;
    newUser->next = NULL;
	if (user_hashtable_p[index] == NULL) {
        user_hashtable_p[index] = newUser;//an einai adeio ton vazw prwto
    } else {
        user_t* lastUser = user_hashtable_p[index];//aliws vriskw ton teleutaio kai ton vazw meta
        while (lastUser->next != NULL) {
            lastUser = lastUser->next;
        }
        lastUser->next = newUser;
    }
	printf("Chain %d of Users:\n", index);
    user_t* current = user_hashtable_p[index];
    while (current != NULL) {
        printf("%d\n", current->userID);
        current = current->next;
    }
	printf("\nDONE\n");
	return 1;
}

void deleteHistory(userMovie_t *history){
	if(history==NULL){
		return;
	}
	deleteHistory(history->lc);
	deleteHistory(history->rc);
	free(history);
}

int unregister_user(int userID){
	int i=0;
	user_t* found;
	user_t* last=NULL;//apothijeuw mia timh pou einai o prwhgoumenos apo ton user p pasxnoyme
	for(i=0; i<hashtable_size; i++){
		found = user_hashtable_p[i];
    	while (found != NULL && found->userID != userID) {
			last= found;
        	found = found->next;
    	}
		if(found != NULL && found->userID == userID){
			break;
		}
		last=NULL;
		
	}
	if(user_hashtable_p[i]->history){//trexw to dentro me to tree history kai diagrafw ta panta
		deleteHistory(user_hashtable_p[i]->history);
	}
	if (last == NULL){// an einai prwto vazw na deixnei sto epomeno 
		user_hashtable_p[i]= found->next;
	}
	else{ //alliws elegxw an exei epomeno kai vazw ton prohgoumeno na deixnei ston epomeno h se null
		if(found->next){
		last->next=found->next;	
		}else{
			last->next =NULL;
		}
	}
	free(found);  
	printf("Chain %d of Users:\n", i);
    user_t* current = user_hashtable_p[i];
    while (current != NULL) {
        printf("%d\n", current->userID);
        current = current->next;
    }
	printf("\nDONE\n");
	return 1;
}

void printnewmovies(new_movie_t* root2) {
    if (root2 != NULL) {
        printnewmovies(root2->lc);
        printf("Movie ID: %d, Category: %d, Year: %d\n", root2->movieID, root2->category, root2->year);
        printnewmovies(root2->rc);
    }
}

new_movie_t* createroot(int movieID, int category, int year){
	new_movie_t *newNode = (new_movie_t*)malloc(sizeof(new_movie_t));
	if (newNode == NULL) {
        exit(EXIT_FAILURE);
    }
	newNode->movieID = movieID;
	newNode->category=category;
    newNode->year = year;
    newNode->watchedCounter = 0;
    newNode->sumScore = 0;
    newNode->lc = NULL;
    newNode->rc = NULL;
}

new_movie_t* root;

new_movie_t* insert(new_movie_t* root, int movieID, int category,  int year);

int add_new_movie(int movieID, int category, int year){
	
	if (root == NULL){
		createroot(movieID, category, year);//an einai adeio to dentro to dhmiourgw pairnontas oti zhtaei h askhsh
	}
	new_releases = insert(new_releases, movieID, category,  year);//paw kai vazw sto new releases tree trexontas to sthn swsth thesi 
	printnewmovies(new_releases);
	printf("DONE\n");
	return 1;
}

new_movie_t* insert(new_movie_t* root, int movieID, int category, int year) {
    if (root == NULL) {
        return createroot(movieID, category,  year);
    }
    if (movieID < root->movieID) {
        root->lc = insert(root->lc, movieID, category, year);
    } else if (movieID > root->movieID) {
        root->rc = insert(root->rc, movieID, category, year);
    }
    return root;
}

void inOrderTraversal(movie_t* root, movie_t* sentinel) {
    if (root != sentinel) {
        inOrderTraversal(root->lc, sentinel);
        printf("%d ", root->movieID);
        inOrderTraversal(root->rc, sentinel);
    }
}

movie_t* createTreeNode(new_movie_t* root, int i){
	movie_t* newNode = (movie_t*)malloc(sizeof(movie_t));
	newNode->movieID=root->movieID;
	newNode->year=root->year;
	newNode->watchedCounter=root->watchedCounter;
	newNode->sumScore=root->sumScore;
	newNode->lc= categoryArray[i]->sentinel;
	newNode->rc= categoryArray[i]->sentinel;
	return newNode;
}

movie_t* searchCategories(new_movie_t* new_releases, int i) {
    if (new_releases != NULL) {
        searchCategories(new_releases->lc, i);
        if (new_releases->category == i) {
            movieCategory_t* category = categoryArray[i];
            if (category->movie == category->sentinel) {
                category->movie = createTreeNode(new_releases, i);
            } else {
                movie_t* current = category->movie;
                new_movie_t* value = new_releases;
                while (1) {
                    if (value->movieID < current->movieID) {
                        if (current->lc == category->sentinel) {
                            current->lc = createTreeNode(value, i);
                            break;
                        } else {
                            current = current->lc;
                        }
                    } else if (value->movieID > current->movieID) {
                        if (current->rc == category->sentinel) {
                            current->rc = createTreeNode(value, i);
                            break;
                        } else {
                            current = current->rc;
                        }
                    } else {
                        // Value already exists in the tree
                        break;
                    }
                }
            }
        }
        searchCategories(new_releases->rc, i);
    }
}

int distribute_movies(void){
	for (int i = 0; i < 6; i++) {//arxikopoiw
    	categoryArray[i] = (movieCategory_t*)malloc(sizeof(movieCategory_t));
    	categoryArray[i]->sentinel = (movie_t*)malloc(sizeof(movie_t));
    	if (categoryArray[i]->sentinel == NULL) {
        	exit(EXIT_FAILURE);
    	}
    	categoryArray[i]->sentinel->movieID = -1;
    	categoryArray[i]->sentinel->year = 0;
    	categoryArray[i]->sentinel->watchedCounter = 0;
    	categoryArray[i]->sentinel->sumScore = 0;
    	categoryArray[i]->sentinel->lc = NULL;
    	categoryArray[i]->sentinel->rc = NULL;
    	categoryArray[i]->movie = categoryArray[i]->sentinel;
	}
	for(int i=0; i<6; i++){//psawxnw gia kathe kathgoria sto new releases kai eisagw sta kainoyrgia dentra analoga
		searchCategories(new_releases, i);
	}
	printf("Movie Category Array:\n");
	for(int i=0; i<6; i++){
		if(i==0){
			printf("HORROR: ");
		}else if(i==1){
			printf("SCIFI: ");
		}else if(i==2){
			printf("DRAMA: ");
		}else if(i==3){
			printf("ROMANCE: ");
		}else if(i==4){
			printf("DOCUMENTARY: ");
		}else if(i==5){
			printf("COMEDY: ");
		}
		inOrderTraversal(categoryArray[i]->movie, categoryArray[i]->sentinel);
		printf("\n");
	}
	printf("DONE\n");
	return 1;
}

void inorderSearch(movie_t* movie, movie_t* sentinel, int movieID, int category){
	if(movie != sentinel){//psaxnw sthn sigkekrimenh kathgoria
		inorderSearch(movie->lc, sentinel, movieID, category);
		if(movie->movieID== movieID){
			printf("I %d %d %d\n",movie->movieID, category, movie->year);
			return;
		}
		inorderSearch(movie->rc, sentinel, movieID, category);
	}
}

int search_movie(int movieID, int category){
	if( category>= 0 && category < 5){
	inorderSearch(categoryArray[category]->movie, categoryArray[category]->sentinel, movieID, category);
	}
	printf("DONE\n");
	return 1;
}

movie_t* inorderSearch2(movie_t* movie, movie_t* sentinel, int movieID, int category, int score){
	if(movie != sentinel){
		inorderSearch2(movie->lc, sentinel, movieID, category, score);
		if(movie->movieID== movieID){
			movie->watchedCounter=movie->watchedCounter+1;
			movie->sumScore=movie->sumScore+score;
		}
		inorderSearch2(movie->rc, sentinel, movieID, category, score);
	}
}

void findparent(userMovie_t* root, userMovie_t* info) {
    if (root != NULL) {
        if (root->lc == NULL && root->rc == NULL) {
            if (root->movieID > info->movieID) {
                root->lc = (userMovie_t*)malloc(sizeof(userMovie_t));
                root->rc = (userMovie_t*)malloc(sizeof(userMovie_t));
                userMovie_t* new = (userMovie_t*)malloc(sizeof(userMovie_t));
                new->movieID = root->movieID;
                new->category = root->category;
                new->score = root->score;
                info->parent = root;
                new->parent = root;
                root->lc = info;
                root->rc = new;
            }else{
				if(!root->parent){
					userMovie_t* new = (userMovie_t*)malloc(sizeof(userMovie_t));
					new->movieID = root->movieID;
               		new->category = root->category;
                	new->score = root->score;
					root->movieID = info->movieID;
               		root->category = info->category;
                	root->score = info->score;
					new->parent=root;
					info->parent=root;
					root->lc= new;
					root->rc = info;
				}else{
					userMovie_t* new = (userMovie_t*)malloc(sizeof(userMovie_t));
					userMovie_t* new2 = (userMovie_t*)malloc(sizeof(userMovie_t));
					new->movieID = root->movieID;
               		new->category = root->category;
                	new->score = root->score;
					new2->movieID = info->movieID;
               		new2->category = info->category;
                	new2->score = info->score;
					info->parent = root->parent;
					root->rc = info;
					info->lc = new;
					info->rc =new2;
				}
			}
            return;
        }
        if (info->movieID < root->movieID ) {
            findparent(root->lc, info);
        } else {
            findparent(root->rc, info);
        }
    }
}

void printleafs(userMovie_t* root){
	if(root != NULL){
		printleafs(root->lc);
		if(root->lc==NULL && root->rc==NULL){
			printf("       %d, %d\n", root->movieID, root->score);
		}
		printleafs(root->rc);
	}
}

int watch_movie(int userID,int category, int movieID, int score){
	userMovie_t* new = (userMovie_t*)malloc(sizeof(userMovie_t));
	user_t* found= (user_t*)malloc(sizeof(user_t));
	inorderSearch2(categoryArray[category]->movie, categoryArray[category]->sentinel, movieID, category, score);//vrsikw thn tainia kai prosthetw osa zhtountai
	new->movieID=movieID;
	new->category=category;
	new->score=categoryArray[category]->movie->sumScore;
	for(int i=0; i<hashtable_size; i++){//vriskw ton xrhsth
		user_t* current = user_hashtable_p[i];
    	while (current != NULL) {
			if(current->userID==userID){
				found= current;
				break;
			}
        	current = current->next;
    	}
	}
	if(found->history==NULL){
		found->history=new;//an to filoprosanatolismeno dentro einai adeio vazw mesa thnkainoyrgia tainia
	}else{
		findparent(found->history, new);//alliws trexw to filoprosanatolismeno dentro kai to eisagw swsta
	}
	printf("History Tree of user %d:\n", found->userID);
	printleafs(found->history);
	printf("DONE\n");
	return 1;
}


int inOrderTraversal2(movie_t* root, movie_t* sentinel, int score, int* currentIndex, movie_t **helptable) { 
    if (root != sentinel) {
        inOrderTraversal2(root->lc, sentinel, score, currentIndex, helptable);
        if (root->watchedCounter != 0) {
            double division = (double)root->sumScore / root->watchedCounter;
            if (division > score) {//vriskw poia exoun megalytero apo to score p dinetai kai auksanw ton pinaka
                helptable[*currentIndex] = root;
                (*currentIndex)++;
            }
        }
        inOrderTraversal2(root->rc, sentinel, score, currentIndex, helptable);
    }
    return 1;
}

void swap(movie_t** a, movie_t** b)
{
    movie_t** temp = a;
    a = b;
    b = temp;
}

double averageRating(movie_t *movie) {
    if (movie->watchedCounter == 0) {
        return 0.0;
    }
    return (double)movie->sumScore / movie->watchedCounter;
}

void heapify(movie_t **helperArray, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && averageRating(helperArray[left]) > averageRating(helperArray[largest]))
        largest = left;

    if (right < n && averageRating(helperArray[right]) > averageRating(helperArray[largest]))
        largest = right;

    if (largest != i) {
        movie_t *temp = helperArray[i];
        helperArray[i] = helperArray[largest];
        helperArray[largest] = temp;

        heapify(helperArray, n, largest);
    }
}

void heapsort(movie_t **table, int numMovies){
	for (int i = numMovies / 2 - 1; i >= 0; i--) {
    	heapify(table, numMovies, i);
    }

    for (int i = numMovies - 1; i >= 0; i--) {
		swap(&table[0], &table[i]);
        heapify(table, i, 0);
    }
}

int filter_movies(int userID, int score) {
    int currentIndex = 0;
    int numMovies = 0;
    movie_t **helptable = (movie_t **)malloc(numMovies * sizeof(movie_t *));
	for (int i = 0; i < 6; i++) {
        inOrderTraversal2(categoryArray[i]->movie, categoryArray[i]->sentinel, score, &currentIndex, helptable);
		numMovies = currentIndex;
    }
	heapsort(helptable, numMovies);//efarmozw heapsort
	for (int i = 0; i < numMovies; i++){
        printf("Movie id %d Average score %f ",helptable[i]->movieID, (double)helptable[i]->sumScore/helptable[i]->watchedCounter);
	}
	if(numMovies == 0){
		printf("There are no movies with average score > score!");
	}
    printf("\nDONE\n");
    free(helptable);
    return 1;
}

int ScoreSum =0;
int counter = 0;

void FindNextLeaf(userMovie_t* root) {
    if(root != NULL){
		FindNextLeaf(root->lc);
		if(root->lc==NULL && root->rc==NULL){
			ScoreSum = root->score + ScoreSum;
			counter++;
		}
		FindNextLeaf(root->rc);
	}
	return;
}

int user_stats(int userID){
	int primeindex=0;
	int prime = primes_g[primeindex];
	int index = userID % hashtable_size;
	while (index % prime == 0){
		prime = primes_g[++primeindex];
		index = (userID + prime) % hashtable_size;
	}
	double averagescore;
	ScoreSum =0;
	counter = 0;
	user_t* current = user_hashtable_p[index];
    while (current != NULL) {//vrsikw ton xrhsth xrhsimopoiwntas to swsto index
        if(current->userID == userID){
			break;
		}
        current = current->next;
    }
	FindNextLeaf(current->history);//vrsikw to scoresum kai counter
	if(counter != 0){
		averagescore = (double)ScoreSum / counter;
	}else{
		averagescore =0;
	}
	printf("Q %d %f\nDONE\n", userID, averagescore);
	return 1;
}



int print_movies(void){
	printf("Movie Category Array:\n");
	for(int i=0; i<6; i++){
		if(i==0){
			printf("HORROR: ");
		}else if(i==1){
			printf("SCIFI: ");
		}else if(i==2){
			printf("DRAMA: ");
		}else if(i==3){
			printf("ROMANCE: ");
		}else if(i==4){
			printf("DOCUMENTARY: ");
		}else if(i==5){
			printf("COMEDY: ");
		}
		inOrderTraversal(categoryArray[i]->movie, categoryArray[i]->sentinel);
		printf("\n");
	}
	printf("DONE\n");
	return 1;
}

int print_users(void){
	int index;
	int last = -1;
	for(int i=0; i<hashtable_size; i++){
		user_t* current = user_hashtable_p[i];
    	while (current != NULL) {
			int primeindex=0;
			int prime = primes_g[primeindex];
			int index = current->userID % hashtable_size;
			while (index % prime == 0){
				prime = primes_g[++primeindex];
				index = (current->userID + prime) % hashtable_size;
			}
			if(index != last){
			last = index;
			printf("Chain %d of users:\n", index);
			user_t* current2 = user_hashtable_p[index];
			while(current2 != NULL){
				printf("    User %d\n", current2->userID);
				printf("     History Tree:\n");
				printleafs(current2->history);
				current2= current2->next;
			}
			}
        	current = current->next;
			
    	}
		
	}
	printf("DONE\n");
	return 1;
}

int main(int argc, char** argv)
{
	FILE *fin = NULL;
	char buff[BUFFER_SIZE], event;

	/* Check command buff arguments */
	if ( argc != 2 ) {
		fprintf(stderr, "Usage: %s <input_file> \n", argv[0]);
		return EXIT_FAILURE;
	}

	/* Open input file */
	if (( fin = fopen(argv[1], "r") ) == NULL ) {
		fprintf(stderr, "\n Could not open file: %s\n", argv[1]);
		perror("Opening test file\n");
		return EXIT_FAILURE;
	}

	/* Read input file buff-by-buff and handle the events */
	while ( fgets(buff, BUFFER_SIZE, fin) ) {

		DPRINT("Event: %s \n", buff);

		switch(buff[0]) {

		/* Comment */
		case '#':
			break;
		/* max_users */
		case '0': {
			sscanf(buff, "%c %u", &event, &max_users);
			DPRINT("max users: %u\n", max_users);
			break;
		}
		/* max_id */
		case '1': {
			sscanf(buff, "%c %u", &event, &max_id);
			DPRINT("max id: %u\n", max_id);
			break;
		}		
		/* Event R : R <userID> - Register user. */
		case 'R':
		{
			 int userID;
			 sscanf(buff, "%c %d", &event, &userID);
			 DPRINT("%c %d\n", event, userID);
			 if ( register_user(userID) ) {
			 	DPRINT("%c succeeded\n", event);
			 } else {
			 	fprintf(stderr, "%c failed\n", event);
			 }

			break;
		}
		/* Event U : U <userID> - Unregister user. */
		case 'U':
		{
			 int userID;
			 sscanf(buff, "%c %d", &event, &userID);
			 DPRINT("%c %d\n", event, userID);

			 if ( unregister_user(userID) ) {
			 	DPRINT("%c %d succeeded\n", event, userID);
			 } else {
			 	fprintf(stderr, "%c %d failed\n", event, userID);
			 }

			break;
		}
		/* Event A : A <movieID> <category> <year> - Add new movie. */
		case 'A':
		{
			 int movieID,category, year;
			 sscanf(buff, "%c %d %d %d", &event, &movieID, &category, &year);
			 DPRINT("%c %d %d %d\n", event, movieID, category, year);

			 if ( add_new_movie(movieID, category, year) ) {
			 	DPRINT("%c %d %d %d succeeded\n", event, movieID, category, year);
			 } else {
			 	fprintf(stderr, "%c %d %d %d failed\n", event, movieID, category, year);
			 }

			break;
		}
		/* Event D : D  - Distribute movies. */
		case 'D':
		{
			 sscanf(buff, "%c", &event);
			 DPRINT("%c\n", event);

			 if ( distribute_movies() ) {
			  	DPRINT("%c succeeded\n", event);
			 } else {
			  	fprintf(stderr, "%c failed\n", event);
			 }

			break;
		}
		/* Event W : W <userID ><category><movieID><score> - Watch movie */
		case 'W':
		{
			int userID, movieID,category,score;

			sscanf(buff, "%c %d %d %d %d", &event,&userID,&category, &movieID, &score);
			DPRINT("%c %d %d %d %d\n", event,userID, category, movieID, score);

			if ( watch_movie(userID,category, movieID, score) ) {
				DPRINT("%c %d %d %d %d succeeded\n", event,userID, category, movieID, score);
			} else {
				fprintf(stderr, "%c %d %d %d %d failed\n", event, userID,category, movieID, score);
			}

			break;
		}
		/* Event –	F  <userID ><category1><category2><score> Filter movies */
		case 'F':
		{
			int userID, score;
			sscanf(buff, "%c %d %d\n", &event, &userID,&score);
			DPRINT("%c %d %d\n", event, userID,score);

			if (filter_movies(userID,score) ) {
				DPRINT("%c %d %d succeeded\n", event, userID,score);
			} else {
				fprintf(stderr, "%c %d %d failed\n", event, userID,score);
			}

			break;
		}
		/* Event Q : Q <userID> - User statistics */
		case 'Q':
		{
			int userID;
			sscanf(buff, "%c %d\n", &event, &userID);
			DPRINT("%c %d\n", event, userID);

			if ( user_stats(userID) ) {
				DPRINT("%c %d succeeded\n", event, userID);
			} else {
				fprintf(stderr, "%c %d failed\n", event, userID);
			}

			break;
		}
		/* Event I : I <movieID> <category> - Search movie */
		case 'I':
		{
			int movieID,category;
			sscanf(buff, "%c %d %d\n", &event, &movieID, &category);
			DPRINT("%c %d %d\n", event, movieID, category);

			if ( search_movie(movieID, category) ) {
				DPRINT("%c %d %d succeeded\n", event, movieID, category);
			} else {
				fprintf(stderr, "%c %d %d failed\n", event, movieID, category);
			}

			break;
		}
		/* Event M : M  - Print movies */
		case 'M':
		{
			sscanf(buff, "%c", &event);
			DPRINT("%c\n", event);

			if ( print_movies() ) {
				DPRINT("%c succeeded\n", event);
			} else {
				fprintf(stderr, "%c failed\n", event);
			}

			break;
		}
		/* Event P : P  - Print users */
		case 'P':
		{
			sscanf(buff, "%c", &event);
			DPRINT("%c\n", event);

			if ( print_users() ) {
				DPRINT("%c succeeded\n", event);
			} else {
				fprintf(stderr, "%c failed\n", event);
			}

			break;
		}
		/* Empty line */
		case '\n':
			break;

		/* Ignore everything else */
		default:
			DPRINT("Ignoring buff: %s \n", buff);
			break;
		}
	}

	return (EXIT_SUCCESS);
}
