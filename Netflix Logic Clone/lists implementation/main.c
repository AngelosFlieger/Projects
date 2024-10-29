/*
 * ============================================
 * file: main.c
 * @Author John Malliotakis (jmal@csd.uoc.gr)
 * @Version 23/10/2023
 *
 * @e-mail hy240@csd.uoc.gr
 *
 * @brief Main function
 *        for CS240 Project Phase 1,
 *        Winter Semester 2023-2024
 * @see   Compile using supplied Makefile by running: make
 * ============================================
 */
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>

#include "streaming_service.h"

/* Maximum input line size */
#define MAX_LINE 1024

/* 
 * Uncomment the following line to
 * enable debugging prints
 * or comment to disable it
 */
/* #define DEBUG */
#ifdef DEBUG
#define DPRINT(...) fprintf(stderr, __VA_ARGS__);
#else
#define DPRINT(...)
#endif /* DEBUG */


struct user* sentinel;
struct new_movie* head;
struct movie* head2;
struct movie* head3;
struct movie* head4;
struct movie* head5;
struct movie* head6;
struct movie* head7;
struct movie* head8;
struct suggested_movie* finalHead;
struct suggested_movie* finalTail;
struct categories {
    struct movie* head;  /*Pointer to the head of the list*/
};
struct categories categories[6];

void init_structures(void)
{
	/*initializing ola ta structures*/
	sentinel = NULL;
	head= NULL;
	head2= NULL;
	head3= NULL;
	head4= NULL;
	head5= NULL;
	head6= NULL;
	head7= NULL;
	head8 = NULL;
	categories[0].head=NULL;
	categories[1].head=NULL;
	categories[2].head=NULL;
	categories[3].head=NULL;
	categories[4].head=NULL;
	categories[5].head=NULL;
}

void destroy_structures(void)
{
	/*
	 * TODO: For a bonus
	 * empty all lists and stacks
	 * and free all memory associated
	 * with list/stack nodes here
	 */
}

struct user* createUser(int uid) {
	/*arxikopoiw ola tou user kai ta vazw null giati den exoun tipota arxika ektos apo to uid*/
    struct user* newUser = (struct user*)malloc(sizeof(struct user));
    newUser->uid = uid;
    newUser->suggestedHead = NULL;;
    newUser->suggestedTail = NULL;;
    newUser->watchHistory = NULL;;   
    newUser->next = NULL;
    return newUser;
}

int register_user(int uid) {
	/*kallw thn create user gia na mou ftiaksei ton xrhsth kai na perasei to uid*/
    struct user* newUser = createUser(uid);
	struct user* current2;
	printf("\nR %u\n ",uid);
    if (sentinel == NULL) {
        /*an h lista einai adeia arxikopoiw xrhsimopoiwntas ton sentinel kai vazw ton prwto xrhsth*/
        sentinel = createUser(-1);
        sentinel->next = newUser;
    } else {
        /*vriskw ton teleutaio komvo ths listas kai vazw ton kainourgio xrhsth*/
        struct user* current = sentinel;
        while (current->next != NULL) {
			if(current->next->uid==uid){
				printf("User already registered!\nDONE\n");
				return -1;
			}
			current = current->next;
        }
		current->next = newUser;
    }
	current2 = sentinel->next;
	printf("Users = ");
	while(current2!=NULL){
		printf("%d", current2->uid);
		current2=current2->next;
		if(current2!=NULL){
			printf(", ");
		}
	}
	printf("\nDONE\n");
	return 0;
}

void unregister_user(int uid){
	struct user* current =sentinel->next;
	struct user* current2;
	struct user* deleted;
	printf("\nU %u\n ",uid);
	if(current->uid==uid){
		/*an o xrhsths pou thelw na kanw unregister einai sthn arxh, apla vazw to epomeno ws thn arxh alliws trexw thn lista mexri na ton vrw*/
		sentinel->next=current->next;
	}else{
		while(current->next!=NULL && current->next->uid!=uid){
			current=current->next;
		}
		if(current->next->uid==uid){
			if(current==sentinel->next){
				current=current->next;
			}else{
				deleted = current->next;
				current->next=deleted->next;
				free(deleted);
			}
		}
	}
	current2 = sentinel->next;
	printf("Users = ");
	while(current2!=NULL){
		printf("%d", current2->uid);
		current2=current2->next;
		if(current2!=NULL){
			printf(", ");
		}
	}
	printf("\nDONE\n");
}

struct movie_info* movieInfo(unsigned mid, unsigned year){
	struct movie_info* newInfo = (struct movie_info*)malloc(sizeof(struct movie_info));
	newInfo->mid=mid;
	newInfo->year=year;
	return newInfo;
}

int add_new_movie(unsigned mid, movieCategory_t category, unsigned year){
	struct new_movie *newMovie = (struct new_movie *)malloc(sizeof(struct new_movie));
	movieCategory_t type = (movieCategory_t)category;
	struct new_movie *current2;
	struct new_movie *current3;
	struct new_movie *current;
	/*pairnaw mid, year kallwntas thn movieInfo*/
	newMovie->info = *movieInfo(mid, year);
	newMovie->category = type;
	/*kai ektypwnw enw thn kanw sort*/
	if (head == NULL ||  newMovie->info.mid < (head)->info.mid) {
        newMovie->next = head;
        head = newMovie;
		current2=head;
		printf("A %u %d %u\nNew movies= ",mid, category, year);
		while(current2!=NULL){
			printf("%u %d %u", current2->info.mid, current2->category, current2->info.year);
			current2=current2->next;
			if(current2!=NULL){
				printf(", ");
			}
		}
		printf("\nDONE\n");
		return 0;
    } else {
        current = head;
        while (current->next != NULL && current->next->info.mid < newMovie->info.mid) {
            current = current->next;
        }
        newMovie->next = current->next;
        current->next = newMovie;
		current3=head;
		printf("A %u %d %u\nNew movies = ",mid, category, year);
		while(current3!=NULL){
			printf("%u %d %u", current3->info.mid, current3->category, current3->info.year);
			current3=current3->next;
			if(current3!=NULL){
				printf(", ");
			}
		}
		printf("\nDONE\n");
		return 0;
    }
	
	return -1;
}

void distribute_new_movies(){
	struct new_movie *current = head;
	int i;
    while (current) {
		/*kanw malloc ta categories gia kathe fora kai pernw cases gia to kathe category*/
		struct movie* Horror = (struct movie*)malloc(sizeof(struct movie));
		struct movie* SCIFI = (struct movie*)malloc(sizeof(struct movie));
		struct movie* DRAMA = (struct movie*)malloc(sizeof(struct movie));
		struct movie* ROMANCE = (struct movie*)malloc(sizeof(struct movie));
		struct movie* DOCUMENTARY = (struct movie*)malloc(sizeof(struct movie));
		struct movie* COMEDY = (struct movie*)malloc(sizeof(struct movie));
		switch (current->category)
		{
		case 0:
			/*pernaw ta info kai vazw sthn sygkekrimenh thesi tou pinaka na dixnei sto head auths ths listas kai ftiaxnw meta thn lista*/
			Horror->info.mid=current->info.mid;
			Horror->info.year=current->info.year;
			if(head2== NULL){
				head2= Horror;
				Horror->next = categories[0].head;
				categories[0].head = Horror;
			}else{
				struct movie* current2 = head2;
				while (current2->next != NULL) {
            		current2 = current2->next;
       			}
				current2->next= Horror;
			}
			break;
        case 1:
			SCIFI->info.mid=current->info.mid;
			SCIFI->info.year=current->info.year;
			if(head3== NULL){
				head3= SCIFI;
				SCIFI->next = categories[1].head;
				categories[1].head =SCIFI;
			}else{
				struct movie* current3 = head3;
				while (current3->next != NULL) {
            		current3 = current3->next;
       			}
				current3->next= SCIFI;
			}
			break;
        case 2:
			DRAMA->info.mid=current->info.mid;
			DRAMA->info.year=current->info.year;
			if(head4== NULL){
				head4= DRAMA;
				DRAMA->next = categories[2].head;
				categories[2].head =DRAMA;
			}else{
				struct movie* current2 = head4;
				while (current2->next != NULL) {
            		current2 = current2->next;
       			}
				current2->next= DRAMA;
			}
			break;
        case 3:
			ROMANCE->info.mid=current->info.mid;
			ROMANCE->info.year=current->info.year;
			if(head5== NULL){
				head5= ROMANCE;
				ROMANCE->next = categories[3].head;
				categories[3].head =ROMANCE;
			}else{
				struct movie* current2 = head5;
				while (current2->next != NULL) {
            		current2 = current2->next;
       			}
				current2->next= ROMANCE;
			}
			break;
        case 4:
			DOCUMENTARY->info.mid=current->info.mid;
			DOCUMENTARY->info.year=current->info.year;
			if(head6== NULL){
				head6= DOCUMENTARY;
				DOCUMENTARY->next = categories[4].head;
				categories[4].head =DOCUMENTARY;
			}else{
				struct movie* current2 = head6;
				while (current2->next != NULL) {
            		current2 = current2->next;
       			}
				current2->next= DOCUMENTARY;
			}
			break;
        case 5:
			COMEDY->info.mid=current->info.mid;
			COMEDY->info.year=current->info.year;
			if(head7== NULL){
				head7= COMEDY;
				COMEDY->next = categories[5].head;
				categories[5].head =COMEDY;
			}else{
				struct movie* current2 = head7;
				while (current2->next != NULL) {
            		current2 = current2->next;
       			}
				current2->next= COMEDY;
			}
			break;
		default:
			printf("Unknown\n");
			break;
		}
		/*edw paw kai vazw to head na einai to epomeno etsi wste na kanw free auto to current pou eixame kai
		etsi tha proxoraei kai h while xwris na kanw kapoio current=current->next giati kathe fora kanw free to 
		current kai etsi adeiazei sto telos h new_movie*/
		head = current->next;
		free(current);
		current=head;
    }
	printf("\nD\nCategorized Movies:\n");
	for(i=0; i<6; i++){
		struct movie* current2 = categories[i].head;
		if(i==0){
    		printf("   Horror: ");
		}else if(i==1){
			printf("   Sci-fi: ");
		}else if(i==2){
			printf("   Drama: ");
		}else if(i==3){
			printf("   Romance: ");
		}else if(i==4){
			printf("   Documentary: ");
		}else if(i==5){
			printf("   Comedy: ");
		}
    	while (current2 != NULL) {
     	   printf("%d ", current2->info.mid);
     	   current2 = current2->next;
    	}
		printf("\n");
	}
	printf("DONE\n");
	return;
}

void push(struct user *currentUser, struct movie *newMovie){
	/*kanw push sthn stiva elegxontas*/
	struct movie *newWatch= (struct movie *)malloc(sizeof(struct movie));
	if(newWatch==NULL){
		printf("Error");
		exit;
	}
	newWatch->info.mid=newMovie->info.mid;
	newWatch->next=currentUser->watchHistory;
	currentUser->watchHistory= newWatch;
}

int top(struct user *createUser){
	return createUser->watchHistory->info.mid;
}

int isEmpty(struct user *currentUser){
	return currentUser->watchHistory==NULL;
}

int pop(struct user *currentUser){
	/*kanw pop xrhsimopoiontas to top kai eleghontas*/
	struct movie *topMovie;
	int popped;
	if(isEmpty(currentUser)){
		printf("User %d watch history is empty",currentUser->uid);
		return -1;
	}
	topMovie = currentUser->watchHistory;
	popped= top(currentUser);
	currentUser->watchHistory=topMovie->next;
	free(topMovie);
	return popped;
}

int watch_movie(int uid, unsigned mid){
	struct movie *watchHistory=(struct movie*)malloc(sizeof(struct movie));;
	struct user* current = sentinel->next;
	struct movie* currentWatch;
	int i;
	/*vriskw poion user theloume kai poia tainia trexontas ton pinaka*/
    while (current != NULL && current->uid!=uid) {
        current = current->next;
    }
	for(i=0; i<6; i++){
		struct movie* head2= categories[i].head;
		while(head2!=NULL && head2->info.mid!=mid){
			head2=head2->next;
		}
		if(head2!=NULL && head2->info.mid==mid){
			watchHistory->info.mid=head2->info.mid;
			push(current, watchHistory);
			break;
		}
	}
	currentWatch = current->watchHistory;
	printf("User %u Watch History= ", current->uid);
	while(currentWatch!=NULL){
		printf("%u ", currentWatch->info.mid);
		currentWatch=currentWatch->next;
		if(currentWatch!=NULL){
			printf(",");
		}
	}
	printf("\nDONE\n");
	return 0;
}

int suggest_movies(int uid){
	unsigned swits=0;
	struct user* suggestedUser;
	struct user* current = sentinel->next;
	struct user* current3 = sentinel->next;
	struct suggested_movie* current4;
	/*vriskw ton user pou theloume*/
	while(current3!=NULL && current3->uid!=uid){
		current3=current3->next;
	}
	suggestedUser=current3;
	while (current != NULL) {/*trexw tous users kai elegxw na mhn einai o dikos mas*/
		if(current->uid!=uid){
			if(!isEmpty(current)){/*elegxw oti h watch history exei mese*/
				struct suggested_movie* suggest = (struct suggested_movie*)malloc(sizeof(struct suggested_movie));
				suggest->info.mid=top(current);/*pernw to top sthxeio ths stoivas kai meta thn kanw pop*/
				pop(current);
				suggest->next=NULL;
				if(suggestedUser->suggestedHead==NULL){
					/*an einai adeio tote paw kai vazw to prwto stoixeio kai epishs to krataw san to teleutaio
					stoixeio pou valame sthn lista*/
					suggestedUser->suggestedHead=suggest;
					suggestedUser->suggestedHead->next=suggestedUser->suggestedTail;
					finalHead=suggestedUser->suggestedHead;
				}else{
					if(suggestedUser->suggestedTail==NULL){
						/*twra an to tail einai adeio pali kanw paromoia me to head alla vazw oti to 
						prohgoumeno tou einai to head*/
						suggestedUser->suggestedTail=suggest;
						suggestedUser->suggestedHead->next=suggestedUser->suggestedTail;
						suggestedUser->suggestedTail->prev=suggestedUser->suggestedHead;
						finalTail=suggestedUser->suggestedTail;
					}else if(swits==0){
						/*twra trexw mia switch pou se kathe epanalipsi allazei etsi wste mia na vazei sto 
						head mia sto tail*/
						struct suggested_movie* current2= finalHead;
						/*exw krathsei to teleuatio tail (finalTail) kai to vazw na deixnei ekei enw to 
						prohgoumeno sto finalHead kai meta vazw to tail na deixnei prin se auto pou valame
						kai to head to epomeno se auto pou valame, etsi wtse na einai ola mazi*/
						suggest->next=finalTail;
						suggest->prev=current2;
						finalTail->prev=suggest;
						current2->next=suggest;
						swits=1;
						/*allazw to final head gia na mou to krathsei*/
						finalHead=suggest;
					}else if(swits==1){
						/*antistoixa kanw kai gia ota allazei to switch*/
						struct suggested_movie* current3= finalTail;
						suggest->next=current3;
						suggest->prev=finalHead;
						current3->prev=suggest;
						finalHead->next=suggest;
						swits=0;
						finalTail=suggest;
					}
				}
			}
		}
        current = current->next;
    }
	current4=suggestedUser->suggestedHead;
	printf("S %u\n   User %u Suggested Movies= ",suggestedUser->uid, suggestedUser->uid);
	while(current4!=NULL){
		printf("%u", current4->info.mid);
		current4=current4->next;
		if(current4!=NULL){
			printf(", ");
		}
	}
	printf("\n");
	return 0; 
}

int filtered_movie_search(int uid, movieCategory_t category1, movieCategory_t category2, unsigned year){
	struct suggested_movie* head9 = (struct suggested_movie*)malloc(sizeof(struct suggested_movie));
	struct movie* suggestedCategory1 = categories[category1].head;
	struct movie* suggestedCategory2 = categories[category2].head;
	struct suggested_movie* newsuggest = NULL;
	struct suggested_movie* current2;
	struct user* currentUser;
	head9=NULL;
	printf("F %u %d %d %u\nUser %u Suggested Movies= ", uid, category1, category2, year, uid);
	while (suggestedCategory1 != NULL) {
		/*trexw ston pinaka categories thn lista pou vrisketai sthn thesh category1 pou mas dinetai
		kai elegxw poies apo tis tainies throun auto me to year*/
		if(suggestedCategory1->info.year>=year){
			newsuggest = (struct suggested_movie*)malloc(sizeof(struct suggested_movie));
			newsuggest->info.mid=suggestedCategory1->info.mid;
			newsuggest->next=NULL;
			/*ftiaxnw mia lista kai vazw mesa osa ontws to tiroun*/
			if(head9==NULL){
				head9=newsuggest;
			}else{
				struct suggested_movie* current = head9;
				while(current->next!=NULL){
					current=current->next;
				}
				current->next=newsuggest;
				newsuggest->prev=current;
			}
		}
     	suggestedCategory1 = suggestedCategory1->next;
    }
	/*kanw to idio kai gia thn allh kathgoria kia synexizw na prosthetw se authn thn lista pou eixa 
	ftiaksei arxika alla twra ta prosthetw etsi wste na einai sorted*/
	while (suggestedCategory2 != NULL) {
		if(suggestedCategory2->info.year>=year){
     		newsuggest = (struct suggested_movie*)malloc(sizeof(struct suggested_movie));
			newsuggest->info.mid=suggestedCategory2->info.mid;
			newsuggest->next=NULL;
			if(head9==NULL){
				head9=newsuggest;
			}else{
				struct suggested_movie* current = head9;
				while(current->next!=NULL && current->info.mid < newsuggest->info.mid){
					current=current->next;
				}
				if(current==head9 ){
					struct suggested_movie* tmp;
					tmp=head9;
					if(head9->next){
						/*an to current einai to head kai exei next tote xwnw endiamesa*/
						newsuggest->next=current->next;
						current->next->prev=newsuggest;
						head9=newsuggest;
						tmp->next=current->next;
						head9->next=tmp;
						current->next->prev=tmp;
						tmp->prev=head9;
						
					}else{
						/*aliws an den einai alegxw an einai to head megalytero giati alliws mporei apla to 
						head na einai to teleutaio sthn lista dhladh na einai mono tou*/
						if(head9->info.mid>newsuggest->info.mid){
							head9=newsuggest;
							newsuggest->next=tmp;
							tmp->prev=tmp;
						}else{
							current->next=newsuggest;
							newsuggest->prev=current;
						}
					}
				}else{
					/*twra an to current den einai to head pali elegxw an yparxei next kai xwnw endiamesa alliws einai to teleutaio*/
					if(current->next){
						newsuggest->next=current;
						newsuggest->prev=current->prev;
						current->prev->next=newsuggest;
						current->prev=newsuggest;
					}else{
						current->next=newsuggest;
						newsuggest->prev=current;
					}
				}
			}
		}
     	suggestedCategory2 = suggestedCategory2->next;
    }
	
	current2=head9;
	while(current2!=NULL){
		printf("%u ", current2->info.mid);
		current2=current2->next;
	}
	printf("\nDONE\n");
	currentUser = sentinel->next;
    while (currentUser != NULL && currentUser->uid!=uid) {
        currentUser = currentUser->next;
    }
	/*elegxw an exei kati mesa h suggested head tou user kai an exei prosthetw thn kainourgia lista sto telos 
	alliws bazw thn kainourgia lita ws suggestedhead*/
	if(currentUser->suggestedHead){
		currentUser->suggestedHead->next=head9;
		head9->prev=currentUser->suggestedHead;
	}else{
		currentUser->suggestedHead=head9;
	}
	return 0;
}

void take_off_movie(unsigned mid){
	struct user* currentUser = sentinel->next;
	struct movie* current2;
	int i;
	printf("T %u\n", mid);
    while (currentUser != NULL) {/*trexw thn lista me tous users kai elegxw an to suggestedhead tou kathenos 
									exei mesa thn tainia po thelw na aferesw*/
		struct suggested_movie* current=currentUser->suggestedHead;
		while(current!=NULL){
			if(current->info.mid==mid){
				printf("%u removed from user %u suggested list.\n", mid, currentUser->uid);
				if(current!=currentUser->suggestedHead){/*an den einai to head kai yprxei epomeno tote vazei 
															to prohgoumeno na deixnei sto epomeno kai to prev */
					if(current->next){
						current->prev->next=current->next;
						current->next->prev=current->prev;
					}else{/*alliws an einai to teleutaio to to afairei*/
						free(current);
					}
				}else{/*alliws an einai to head elegxei an exei epomeno kai vazei auto na einai to head alliws 
						pali kanei to teleutaio pou einai to head, free*/
					if(current->next){
					currentUser->suggestedHead=current->next;
					}else{
						free(current);
					}
				}
			}
			current=current->next;
		}
		currentUser = currentUser->next;
    }
	for(i=0; i<6; i++){
		struct movie* findCategory = categories[i].head;
		struct movie* prevCategory;
		/*vriskei pou vrisketai, se poio category kai krataei kai to teleutaio prin dhladh apo auto pou 
		thelame na vroume*/
		while(findCategory!=NULL && findCategory->info.mid!=mid){
			prevCategory=findCategory;
			findCategory=findCategory->next;
		}
		/*an to vrei elegxei an einai to head wste na valei head to epomeno an yparxei alliws kanei free to 
		head giati einai to teleutaio, an den einai to head vazei to prohgoumeno apo auto pou exoume na deixnei 
		sto epomeno, an den yparxei to epomeno kanei to prohoumeno na deixnei se null kai kanei freei to teleutaio*/
		if(findCategory!=NULL && findCategory->info.mid==mid){
			printf("%u removed from number %u category list\n", mid, i);
			if(findCategory==categories[i].head){
				if(findCategory->next){
					categories[i].head=findCategory->next;
				}else{
					free(categories[i].head);
				}
			}else{
				if(findCategory->next){
					prevCategory->next=findCategory->next;
				}else{
					prevCategory->next=NULL;
					free(findCategory);
				}
			}
			current2 = categories[i].head;
			if(i==0){
    			printf("   Horror List: ");
			}else if(i==1){
				printf("   Sci-fi List: ");
			}else if(i==2){
				printf("   Drama List: ");
			}else if(i==3){
				printf("   Romance List: ");
			}else if(i==4){
				printf("   Documentary List: ");
			}else if(i==5){
				printf("   Comedy List: ");
			}
    		while (current2 != NULL) {
     	  		printf("%d ", current2->info.mid);
     	    	current2 = current2->next;
    		}
			printf("\n");
		}
	}
}

void print_movies(void){
	int i;
	printf("\nM\nCategorized Movies:\n");
	for(i=0; i<6; i++){
		struct movie* current2 = categories[i].head;
		if(i==0){
    		printf("   Horror: ");
		}else if(i==1){
			printf("   Sci-fi: ");
		}else if(i==2){
			printf("   Drama: ");
		}else if(i==3){
			printf("   Romance: ");
		}else if(i==4){
			printf("   Documentary: ");
		}else if(i==5){
			printf("   Comedy: ");
		}
    	while (current2 != NULL) {
     	   printf("%d ", current2->info.mid);
     	   current2 = current2->next;
    	}
		printf("\n");
	}
	printf("\nDONE\n");
}

void print_users() {
    struct user* current = sentinel->next;
	struct suggested_movie* current4;
	struct movie* currentWatch;
    printf("P\nUsers:");
    while (current != NULL ) {
		printf("\n   %d:\n", current->uid);
		current4=current->suggestedHead;
		printf("     Suggested: ");
		while(current4!=NULL){
			printf("%u", current4->info.mid);
			current4=current4->next;
			if(current4!=NULL){
				printf(", ");
			}
		}
		printf("\n");
		currentWatch = current->watchHistory;
		printf("     Watch History: ");
		while(currentWatch!=NULL){
			printf("%u ", currentWatch->info.mid);
			currentWatch=currentWatch->next;
			if(currentWatch!=NULL){
				printf(",");
			}
		}
		current = current->next;
    }
    printf("\nDONE\n");
}

int main(int argc, char *argv[])
{
	FILE *event_file;
	char line_buffer[MAX_LINE];

	if (argc != 2) {
		fprintf(stderr, "Usage: %s <input_file>\n",
				argv[0]);
		exit(EXIT_FAILURE);
	}

	event_file = fopen(argv[1], "r");
	if (!event_file) {
		perror("fopen error for event file open");
		exit(EXIT_FAILURE);
	}

	init_structures();
	while (fgets(line_buffer, MAX_LINE, event_file)) {
		char *trimmed_line;
		char event;
		int uid;
		unsigned mid, year;
		movieCategory_t category1, category2;
		/*
		 * First trim any whitespace
		 * leading the line.
		 */
		trimmed_line = line_buffer;
		while (trimmed_line && isspace(*trimmed_line))
			trimmed_line++;
		if (!trimmed_line)
			continue;
		/* 
		 * Find the event,
		 * or comment starting with #
		 */
		if (sscanf(trimmed_line, "%c", &event) != 1) {
			fprintf(stderr, "Could not parse event type out of input line:\n\t%s",
					trimmed_line);
			fclose(event_file);
			exit(EXIT_FAILURE);
		}

		switch (event) {
			/* Comment, ignore this line */
			case '#':
				break;
			case 'R':
				if (sscanf(trimmed_line, "R %d", &uid) != 1) {
					fprintf(stderr, "Event R parsing error\n");
					break;
				}
				register_user(uid);
				break;
			case 'U':
				if (sscanf(trimmed_line, "U %d", &uid) != 1) {
					fprintf(stderr, "Event U parsing error\n");
					break;
				}
				unregister_user(uid);
				break;
			case 'A':
				if (sscanf(trimmed_line, "A %u %d %u", &mid, (int *)&category1,
							&year) != 3) {
					fprintf(stderr, "Event A parsing error\n");
					break;
				}
				add_new_movie(mid, category1, year);
				break;
			case 'D':
				distribute_new_movies();
				break;
			case 'W':
				if (sscanf(trimmed_line, "W %d %u", &uid, &mid) != 2) {
					fprintf(stderr, "Event W parsing error\n");
					break;
				}
				watch_movie(uid, mid);
				break;
			case 'S':
				if (sscanf(trimmed_line, "S %d", &uid) != 1) {
					fprintf(stderr, "Event S parsing error\n");
					break;
				}
				suggest_movies(uid);
				break;
			case 'F':
				if (sscanf(trimmed_line, "F %d %d %d %u", &uid, (int *)&category1,
							(int *)&category2, &year) != 4) {
					fprintf(stderr, "Event F parsing error\n");
					break;
				}
				filtered_movie_search(uid, category1, category2, year);
				break;
			case 'T':
				if (sscanf(trimmed_line, "T %u", &mid) != 1) {
					fprintf(stderr, "Event T parsing error\n");
					break;
				}
				take_off_movie(mid);
				break;
			case 'M':
				print_movies();
				break;
			case 'P':
				print_users();
				break;
			default:
				fprintf(stderr, "WARNING: Unrecognized event %c. Continuing...\n",
						event);
				break;
		}
	}
	fclose(event_file);
	destroy_structures();
	return 0;
}